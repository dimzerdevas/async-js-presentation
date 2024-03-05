class RestaurantTable extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });

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
  }
}

customElements.define("restaurant-table", RestaurantTable);
