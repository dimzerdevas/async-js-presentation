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
        background-color: black;
        border: 1px solid black;
        width: 100px;
        height: 100px;
      }
      
      .chair {
        border: 1px solid black;
        width: 40px;
        height: 40px;
        border-radius: 50px;
        background: black;
        margin: 5px;
      }
    </style>
        <div class="table-container">
            <div class="chair"></div>
            <div class="vertical-arrangement">
            <div class="chair"></div>
            <div class="table"></div>
            <div class="chair"></div>
            </div>
            <div class="chair"></div>
        </div>
    `;
  }
}

customElements.define('restaurant-table', RestaurantTable)
