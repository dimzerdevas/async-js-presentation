class Modal extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });

    shadowRoot.innerHTML = `
    <style>
     
    </style>
    </head>
    <body>
    
    <h2>Modal Example</h2>
    
    <!-- Trigger/Open The Modal -->
    <button id="myBtn">Open Modal</button>
    
    <!-- The Modal -->
    <div id="myModal" class="modal">
    
      <!-- Modal content -->
      <div class="modal-content">
        <span class="close">&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    
    </div>
    `;
    // Get the modal
    var modal = this.shadowRoot.querySelector("#myModal");
    
    // Get the button that opens the modal
    var btn = this.shadowRoot.querySelector("#myBtn");
    
    // Get the <span> element that closes the modal
    var span = this.shadowRoot.querySelectorAll(".close")[0];
    
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
}

customElements.define("modal-prompt", Modal);

class RestaurantTable extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });

    const modal = document.createElement("modal-prompt");

    shadowRoot.innerHTML = `
    <style>
    .table-container {
        display: flex;
        align-items: center;
        transform: rotate(45deg); 
      }
      
      .vertical-arrangement {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .table {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
        border: 1px solid black;
        width: 100px;
        height: 100px;
        padding: 10px;
      }

      .chair {
        border: 1px solid black;
        width: 40px;
        height: 40px;
        border-radius: 50px;
        background: black;
        margin: 5px;
        color: white;
        transform: rotate(-45deg);
        padding: 10px;
      }

      .operation-btn {
        border-radius: 50%;
        width: 60px;
        height: 60px;
        position: absolute;
        top: 0;
        left: 0;
      }
      .tech {
        display: block;
        color: white;
        transform: rotate(-45deg);
      }
    </style>
        <div class="table-container">
          <div class="chair">
            <button onclick="handleClick" class="operation-btn">Create</button>
          </div>
          <div class="vertical-arrangement">
            <div class="chair">
              <button class="operation-btn">Read</button>
            </div>
            <div class="table"><span class="tech">${this.getAttribute(
              "tech"
            )}</span></div>
            <div class="chair">
              <button class="operation-btn">Update</button>
            </div>
          </div>
          <div class="chair">
            <button class="operation-btn">Delete</button>
          </div>
        </div>
    `;
    shadowRoot.append(modal);
    const button = this.shadowRoot.querySelector(".operation-btn");
    button.onclick = () => console.log("hello");
  }
}

customElements.define("restaurant-table", RestaurantTable);
