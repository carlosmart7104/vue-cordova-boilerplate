export default class {
  constructor(canvas) {
    if (typeof CanvasCamera !== 'undefined') {
      console.log('CanvasCamera exist')
      // alert('CanvasCamera exist')
      this.type = 'cordova'
    } else {
      console.log('CanvasCamera don\'t exist')
      // alert('CanvasCamera don\'t exist')
      this.type = 'getUserMedia'
    }
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d')
    this.width = this.canvas.width
    this.height = this.canvas.height
  }

  setType(t) {
    this.type = t;
  }

  init() {
    console.log(`type: ${this.type}`)
    if (this.type === 'cordova') {
      CanvasCamera.initialize(this.canvas)
    }
  }

  start() {
    console.log('camera.start()')
    if (this.type === 'cordova') {
      console.log('CanvasCamera.start()')
      CanvasCamera.start({
            fps: 20,
            use: 'data',
            cameraPreview: 'back',
            onAfterDraw: ((frame) => {
              // this.preview = frame.renderer.data.data;
              // console.log(frame.image.src)
            }),
          }, (err) => {
            console.log('CanvasCamera.start() error')
            console.log(err)
          })
    } else {
      console.log('start camera with getUserMedia')
      // Grab elements, create settings, etc.
      // Get access to the camera!
      let video = document.createElement('video')

      if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          // Not adding `{ audio: true }` since we only want video now
          navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
              //video.src = window.URL.createObjectURL(stream)
              video.srcObject = stream
              video.play()
          });
      } else if(navigator.getUserMedia) { // Standard
          navigator.getUserMedia({ video: true }, function(stream) {
              video.src = stream
              video.play()
          }, function (err) {
            console.log(err)
          })
      } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
          navigator.webkitGetUserMedia({ video: true }, function(stream){
              video.src = window.webkitURL.createObjectURL(stream)
              video.play()
          }, function (err) {
            console.log(err)
          })
      } else if(navigator.mozGetUserMedia) { // Mozilla-prefixed
          navigator.mozGetUserMedia({ video: true }, function(stream){
              video.srcObject = stream
              video.play()
          }, function (err) {
            console.log(err)
          })
      }

      setInterval(() => {
        if (typeof this.ctx !== 'undefined') {
          this.ctx.drawImage(video, 0, 0, this.width, this.height)
        }
      }, 250)
    }
  }

  stop() {
    console.log('camera.stop()')
    if (this.type === 'cordova') {
      console.log('CanvasCamera.stop()')
      CanvasCamera.stop((err) => {
        console.log(err);
      });
    } else {
      console.log('stop camera with getUserMedia')
    }
  }
};
