<?php
/*******************************************************************************
* File with setting callbacks
*******************************************************************************/

/**
* Generates a settings form
* @param void
* @return HTML
**/
function clarity_admin_settings_page(){
  if (!current_user_can('administrator')) {
    return;
  }else {
    ?>
      <div class="clarity_submenu_page">
        <h1>Clarity Settings</h1>
        <form action="options.php" method="post">
          <?php
            settings_fields('clarity_settings_fields');
            do_settings_sections('clarity_settings');
            ?>
            <?php
            submit_button();
          ?>
        </form>
      </div>
    <?php
  }
}


function getEventIdName($o){
  return $o->computerId."_".$o->sessionId1."_".$o->sessionId2."_".$o->sessionId3."_".$o->eventNumber;
}

/**
* Displays settings section
* @param void
* @return HTML
**/
function clarity_section_project_id_callback(){
  global $wpdb;
  $eventNumber = 'eventNumber';
  $computerId = 'computerId';
  $sessionId1 = 'sessionId1';
  $sessionId2 = 'sessionId2';
  $sessionId3 = 'sessionId3';

  $table_name = $wpdb->prefix . 'clarity';
  $results = $wpdb->get_results( "SELECT {$eventNumber} FROM {$table_name}");
  $results_all = $wpdb->get_results( "SELECT * FROM {$table_name}");
  $column = $results[0]->eventNumber;
  $last = count($results)-1;
  ?>
<!-- S -->
<script type="text/javascript">

// Javascript global definition functions
function ComputerIdToName(id, element){
	
	console.log('ComputerIdToName Called ', id);
	// 
	const names = ['johny', 'rabbit', 'turtle', 'darth maul'];
	if( ComputerIdToName.id2names === undefined ){
		ComputerIdToName.nextName = 0;
		ComputerIdToName.id2names = {};
	}

	if(!ComputerIdToName.id2names[id]){
		// assign a name
		ComputerIdToName.id2names[id] = names[ComputerIdToName.nextName] + Math.floor(Math.random()*1000);
		ComputerIdToName.nextName = (ComputerIdToName.nextName + 1 )% names.length;
	}
	element.innerHTML = ComputerIdToName.id2names[id];
}
</script>

<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
.slidecontainer {
  width: 100%;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 25px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #4CAF50;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #4CAF50;
  cursor: pointer;
}
</style>
<!-- E -->
    <div class="clarity_render_page">
      <div class="clarity_render_page_container"style="display:flex;overflow:auto;height: 800px">
        <div class="clarity_render_page_container_users" style="max-height:600px;width: 300px;">
          <h2 style="text-align: center;">User Events </h2>
<!-- S -->

<?php clarity_render_video_controls(); ?>
<!-- E -->
						<a  href="javascript:void(0)" style="text-decoration: none;" onclick="loadAndRenderClarityEvents('testwork')">
                <div class="clarity_render_page_container_user" style="width: 60%; margin: auto;">
									<p style="margin:0; text-align: center; border: 1px solid rgba(0,0,0,0.5); font-size: 0.95rem; background-color: cadetblue; color: white;"><span id='j'>test1</p>
                </div>
            </a>
						<a  href="javascript:void(0)" style="text-decoration: none;" onclick="loadAndRenderClarityEvents('brw5d9_a85eab3da6394174be06ef8d2a90ac96_k5bco2xn_5cfb4209997c46c4885c42868238b9d5_3')">
                <div class="clarity_render_page_container_user" style="width: 60%; margin: auto;">
									<p style="margin:0; text-align: center; border: 1px solid rgba(0,0,0,0.5); font-size: 0.95rem; background-color: cadetblue; color: white;"><span id='ej'>test2</p>
                </div>
            </a>
          <?php for ($x = 0; $x <= $last; $x++) {
            ?>
              <a  href="javascript:void(0)" style="text-decoration: none;" onclick="loadAndRenderClarityEvents('<?=getEventIdName($results_all[$x])?>')">
                <div class="clarity_render_page_container_user" style="width: 60%; margin: auto;">
                  
									<p style="margin:0; text-align: center; border: 1px solid rgba(0,0,0,0.5); font-size: 0.95rem; background-color: cadetblue; color: white;"><span id='jrt<?=$x?>'><script>ComputerIdToName('<?= $results_all[$x]->sessionId1; ?>', document.getElementById('jrt<?=$x?>')); </script></span> <?= $results[$x]->eventNumber; ?></p>
                </div>
              </a>

            <?php
          } ?>
        </div>
        <div class="clarity_render_page_container_reproduction" style="width:70%;">

          <?php clarity_settings_field_project_id_callback(); ?>
        </div>
      </div>
    </div>
  <?php
}


function clarity_render_video_controls(){
  ?>
<div class="slidecontainer" style="width: 80%; margin: auto; margin-bottom: 3rem;">
  <p>Custom range slider:</p>
  <input type="range" min="1" max="100" value="50" class="slider" id="clarity-video-slider">
  <p style="margin-top: 0; text-align: center;"> <span id="clarity-video-slider-output"></span></p>
    <div class="clarity_render_event_reproduction" style="display: flex; justify-content: space-between;">
      
			
			<a  href="javascript:void(0)" id="clarity-play-button" style="text-decoration: none;">
        <div class="clarity_render_page_container_user_stop" style="margin:0; text-align: center; background-color: rgba(0,0,0, 0.8); color: white; font-size: 0.9rem; padding: 0.4rem 1rem;">
          <span class="dashicons dashicons-controls-play"></span>
        </div>
      </a>
      <a  href="javascript:void(0)" id="clarity-pause-button" style="text-decoration: none;">
        <div class="clarity_render_page_container_user" style="margin:0; text-align: center; background-color: rgba(0,0,0, 0.8); color: white; font-size: 0.9rem; padding: 0.4rem 1rem;">
          <span class="dashicons dashicons-controls-pause"></span>
        </div>
      </a>
      <a  href="javascript:void(0)" onclick="loadAndRenderClarityEvents('testwork')">
            <div class="clarity_render_page_container_user" style=" text-align: center; background-color: rgba(0,0,0, 0.8); color: white; font-size: 0.9rem; padding: 0.4rem 1rem;">
              <span class="dashicons dashicons-controls-repeat"></span>
            </div>
          </a>
    </div>
</div>
	<?php
}

/**
* Generates a settings input for introducing the project ID
* @param void
* @return HTML
**/
function clarity_settings_field_project_id_callback(){

  $p_id_option = get_option('clarity_project_id', clarity_project_id_defualt_value());
  ?>
<script type="text/javascript">

class ClarityVideoPlayer {
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

//
		let clarityVideoPlayer = undefined;
		async function loadAndRenderClarityEvents(id) {
     	console.log(id);
     	const url = '<?= get_site_url(); ?>/wp-json/clarity/event?id='+id;
     	console.log(url);
     	const resp = await fetch(url);
     	console.log('resp ', resp);
			const r = await resp.json();
			const decPayload = clarityDecoder.decode(r);
			await clarityVideoPlayer.initVideo(decPayload);
		}

		async function onLoadHandler() {
			console.log('Iframe loaded');
			const iframe = document.getElementById("clarity-render-iframe");
			const play =  document.getElementById("clarity-play-button");
			const pause =  document.getElementById("clarity-pause-button");
			const slider = document.getElementById("clarity-video-slider");
			const sliderOutput = document.getElementById("clarity-video-slider-output");
			// iframe.src = '...'; 

			console.log(iframe);
			console.log(play);
			console.log(pause);
			console.log(slider);
			console.log(sliderOutput);

			clarityVideoPlayer = new ClarityVideoPlayer(iframe, slider, sliderOutput, play, pause);
			iframe.onload = null;
    }
    </script>
    <iframe id="clarity-render-iframe" src="<?= get_home_url() ?>" width="80%" height="100%" onload="onLoadHandler();">
      <script type="text/javascript">
        console.log('Hello world69');
      </script>
    </iframe>
  <?php
}

/**
* Generates a settings form
* @param void
* @return HTML
**/
function clarity_project_id_defualt_value(){
  $default_value = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx';

  return $default_value;
}
