(function() {
    let template = document.createElement("template");
    template.innerHTML = `
<br>
<style>
    #form {
        font-family: Arial, sans-serif;
        width: 400px;
        margin: 0 auto;
    }

    a {
        text-decoration: none;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 10px;
    }

    td {
        padding: 1px;
        text-align: left;
        font-size: 13px;
    }

    input[type="text"] {
        width: 100%;
        padding: 10px;
        border: 2px solid #ccc;
        border-radius: 5px;
        font-size: 13px;
        box-sizing: border-box;
        margin-bottom: 10px;
    }

    select {
        width: 100%;
        padding: 10px;
        border: 2px solid #ccc;
        border-radius: 5px;
        font-size: 13px;
        box-sizing: border-box;
        margin-bottom: 10px;
    }

    input[type="submit"] {
        background-color: #487cac;
        color: white;
        padding: 10px;
        border: none;
        border-radius: 5px;
        font-size: 14px;
        cursor: pointer;
        width: 100%;
    }

    #label {
        width: 140px;
    }
</style>
<form id="form">
    <table>
        <tr>
        <td>Image URL</td>
        <td><input id="builder_src" type="text"  placeholder="Enter Image URL"></td>
        </tr>
        <tr>
        <td>Image Width</td>
        <td><input id="builder_width" type="text"  placeholder="Enter Image Width"></td>
        </tr>
        <tr>
        <td>Image Height</td>
        <td><input id="builder_height" type="text"  placeholder="Enter Image Height"></td>
        </tr>
        
    </table>
    <input value="Update Image" type="submit">
    <br>
    <p>Developed by <a target="_blank" href="https://linkedin.com/in/itsrohitchouhan">Rohit Chouhan</a></p>
</form>
`;
    class ImageWidgetBuilderPanel extends HTMLElement {
        constructor() {
            super();
            this._shadowRoot = this.attachShadow({
                mode: "open"
            });
            this._shadowRoot.appendChild(template.content.cloneNode(true));
            this._shadowRoot
                .getElementById("form")
                .addEventListener("submit", this._submit.bind(this));
        }
        _submit(e) {
            e.preventDefault();
            this.dispatchEvent(
                new CustomEvent("propertiesChanged", {
                    detail: {
                        properties: {
                            src: this.src,
                            width: this.width,
                            height: this.height
                        },
                    },
                })
            );
        }

        set src(_src) {
            this._shadowRoot.getElementById("builder_src").value = _src;
        }
        get src() {
            return this._shadowRoot.getElementById("builder_src").value;
        }

        set width(_width) {
            this._shadowRoot.getElementById("builder_width").value = _width;
        }
        get width() {
            return this._shadowRoot.getElementById("builder_width").value;
        }

        set height(_height) {
            this._shadowRoot.getElementById("builder_height").value = _height;
        }
        get height() {
            return this._shadowRoot.getElementById("builder_height").value;
        }

    }
    customElements.define(
        "com-rohitchouhan-sap-imagewidget-builder",
        ImageWidgetBuilderPanel
    );
})();
