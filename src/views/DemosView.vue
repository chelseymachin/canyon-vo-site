<template>
  <div class="demos">
    <h1 class="text-center pt-12">Demos</h1>
    <div class="content flex-column">
      <div class="audio-wrapper">
        <span class="pb-2">Demo 1:</span>
        <audio
          controls
          src="@/dist/sample-sound.mp3"
          class="pb-4"
        >
          <a href="@/dist/sample-sound.mp3">  
            Download audio
          </a>
        </audio>
      </div>
      
      <div class="audio-wrapper">
        <span class="pb-2">Demo 2:</span>
        <audio
          controls
          src="@/dist/sample-sound.mp3"
          class="pb-4"
        >
          <a href="@/dist/sample-sound.mp3">  
            Download audio
          </a>
        </audio>
      </div>

      <div class="audio-wrapper">
        <span class="pb-2">Demo 3:</span>
        <audio
          controls
          src="@/dist/sample-sound.mp3"
          class="pb-4"
        >
          <a href="@/dist/sample-sound.mp3">  
            Download audio
          </a>
        </audio>
      </div>
    </div>
  </div>
</template>
  
  <style scoped>
  @media only screen and (max-width: 600px) {
    
  }
  
  h1 {
    font-size: 3rem;
    font-weight: bold;
  }

  .audio-wrapper {
    margin: 0 auto;
    width: 80%;
  }

  audio {
    display: inline;
    padding-left: 1rem;
  }
  
  </style>