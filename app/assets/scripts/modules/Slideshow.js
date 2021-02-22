
/*jshint esversion: 6 */

class Slideshow {
  constructor() {
    this.slideshow = document.getElementById("slideshow");
    this.slideshowBg = document.getElementById("slideshow-bg");
    this.slides = ["assets/images/testimonial-cat-hi-dpi.jpg", "assets/images/testimonial-john-hi-dpi.jpg", "assets/images/testimonial-jane-hi-dpi.jpg"];
    this.step = 0;
    this.stepBg = 1;
    this.timer();
  }

  timer() {
    this.slideshowBg.src = this.slides[this.stepBg];
    this.slideshow.src = this.slides[this.step];
    setTimeout(() => { this.Slideshow.className += "fadeout"; }, 1000);
    this.step++;
    this.stepBg++;
    if(this.step == this.slides.length )  this.step = 0;
    if(this.stepBg == this.slides.length )  this.stepBg = 0;
    setTimeout(() => {
      this.slideshow.className = "";
      this.timer();
    }, 5000);
  };
}

export default Slideshow;
