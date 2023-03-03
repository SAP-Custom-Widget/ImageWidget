(function () {
    let template = document.createElement("template");
    template.innerHTML = `
      <style>
        :host {}
      </style>
      <div>
        <img id="image" alt="">
      </div>
    `;
  
    class ImageWidget extends HTMLElement {
      constructor() {
        super();
        let shadowRoot = this.attachShadow({
          mode: "open"
        });
        shadowRoot.appendChild(template.content.cloneNode(true));
        this._props = {};
      }
  
      async connectedCallback() {
        this.updateImage();
      }
  
      async updateImage() {
        const src = this._props.src || "https://via.placeholder.com/150";
        const imageElement = this.shadowRoot.getElementById("image");
        imageElement.src = src;
        imageElement.width = this._props.width || 150;
        imageElement.height = this._props.height || 150;
      }
  
      onCustomWidgetBeforeUpdate(changedProperties) {
        this._props = {
          ...this._props,
          ...changedProperties
        };
      }
  
      onCustomWidgetAfterUpdate(changedProperties) {
        this.updateImage();
      }
    }
  
    customElements.define("com-rohitchouhan-sap-imagewidget", ImageWidget);
  })();
  