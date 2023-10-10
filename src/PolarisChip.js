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
        margin: 0 16px 16px 0;
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
