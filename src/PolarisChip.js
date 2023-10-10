import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin: 0 12px 12px 0;
      }

      span {
        padding: 8px 4px;
        border: 2px solid #444;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'My boilerplate';
  }

  render() {
    return html`<span>${this.title}</span>`;
  }
}
