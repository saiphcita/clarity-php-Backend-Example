
export class ClarityVideoPlayer {
	constructor(iframe, sliderElement, sliderOutputElement, playElement, pauseElement) {
		this.slider = sliderElement;
		const self = this;
		this.iframe = iframe;
		playElement.onclick = ()=>{
			self.playVideo(this.slider.value);
		} ;
		pauseElement.onclick = ()=>{
			self.pauseVideo();
		};
		this.replayGenerator = this.restrictOneExcecution(clarityDecoder.replayGenerator);
		this.events = null;
		

		sliderOutputElement.innerHTML = this.slider.value ;
		this.sliderText = sliderOutputElement;
		this.slider.oninput = function() {
			self.playVideo(this.value);
			self.pauseVideo();
		}
	}
	updateTextSlider(text){
		console.log('this.events[0].time ', this.events[2].time, text)	
		this.sliderText.innerHTML = Math.round( (text -  this.events[2].time)/1000) + ' s';
	}

	async reloadIframe (){
		await this.iframe.contentWindow.location.reload();
	}

	async initVideo(decodedPayload){
		await this.reloadIframe();
		this.events = [];
		console.log('initVideo ', decodedPayload);
		
		for (let key in decodedPayload) {
			if (Array.isArray(decodedPayload[key])) {
				this.events = this.events.concat(decodedPayload[key]);
			}
		}
		this.slider
		this.events.sort(sort);
		console.log('InitVideo', this.events);
		
		this.slider.value = 2;
		this.updateTextSlider(this.events[2].time);
	}

	playVideo (t){
		if(!this.events){
			alert ('No video is selected, please select a video to play');
			return;
		}
		this.videoStatus = 'play';
		const r = ( t / 100.0 ) * this.events.length;
		const events = this.events.slice(r);

		if(events.length > 1) {
			console.log('SS Replay start', events);
			this.replayGenerator(events, this.iframe, null);
			console.log('SS Replay end');
		}
	}

	pauseVideo() {
		this.videoStatus = 'pause';
	}

	restrictOneExcecution(generator) {
		let globalNonce;
		let videoIndex;
		const self = this;
		console.log('restrictOneExcecution this', this);
		return async function(...args) {
			const localNonce = globalNonce = new Object();
			// videoIndex = slider.value;
			const iter = generator(...args);
			let resumeValue;
			for (;;) {
				const n = iter.next(resumeValue);
				self.slider.value ++;
				if (n.done) {
					return n.value;  // final return value of passed generator
				}
				// whatever the generator yielded, _now_ run await on it
				resumeValue = await n.value;
				// console.log('SSS =>', resumeValue.time);
				self.updateTextSlider(resumeValue.time);
				if (localNonce !== globalNonce || self.videoStatus === 'pause') {
					return;  // a new call was made
				}
				// next loop, we give resumeValue back to the generator
			}
		};
	}

}

function sort(a, b) {
	return a.time - b.time;
}