class DDLBigFeature {
  constructor(root) {
    this.root = root;
    this.root.addEventListener("click", this.buttonClickHandler.bind(this));
  }

  buttonClickHandler(e) {
    const button = this.root.querySelector(".play-button");
    if (e.target === button) {
      const img = this.root.querySelector("img");
      button.style.display = "none";
      if (img) {
        img.style.display = "none";
      }
    }
  }
}

export default DDLBigFeature;
