import React, { Component } from 'react';
import Icons from './icons';
import Icon from './icon';
import './App.css';

class App extends Component {
  render() {
    return (
      <div onTouchStart={() => null}>
        <button className={`vds-btn-text--tertiary`} onClick={(e) => document.dir = document.dir === 'rtl' ? 'ltr' : 'rtl'}>Toggle Right to Left Support</button>
        <h2>Text</h2>
        <button className="vds-btn-text--primary">PRIMARY</button>
        <button disabled className="vds-btn-text--primary">DISABLED</button>
        <button className="vds-btn-text--secondary">SECONDARY</button>
        <button disabled className="vds-btn-text--secondary">DISABLED</button>
        <button className="vds-btn-text--tertiary">TERTIARY</button>
        <button disabled className="vds-btn-text--tertiary">DISABLED</button>
        <button className={`vds-btn-text--primary vds-btn--fullwidth`}>FULL WIDTH PRIMARY</button>
        <button className={`vds-btn-text--secondary vds-btn--fullwidth`}>FULL WIDTH SECONDARY</button>
        <button className={`vds-btn-text--tertiary vds-btn--fullwidth`}>FULL WIDTH TERTIARY</button>
        <button disabled className={`vds-btn-text--primary vds-btn--fullwidth`}>FULL WIDTH PRIMARY DISABLED</button>
        <button disabled className={`vds-btn-text--secondary vds-btn--fullwidth`}>FULL WIDTH SECONDARY DISABLED</button>
        <button disabled className={`vds-btn-text--tertiary vds-btn--fullwidth`}>FULL WIDTH TERTIARY DISABLED</button>
        <button className={`vds-btn-text--primary`}>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" role="img" />
          <span className="vds-btn--label">ICON PRIMARY</span>
        </button>
        <button className={`vds-btn-text--secondary`}>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          <span className="vds-btn--label">ICON SECONDARY</span>
        </button>
        <button className={`vds-btn-text--tertiary`}>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          <span className="vds-btn--label">ICON TERTIARY</span>
        </button>
        <button disabled className={`vds-btn-text--primary`}>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          <span className="vds-btn--label">ICON PRIMARY DISABLED</span>
        </button>
        <button disabled className={`vds-btn-text--secondary`}>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          <span className="vds-btn--label">ICON SECONDARY DISABLED</span>
        </button>
        <button disabled className={`vds-btn-text--tertiary`}>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          <span className="vds-btn--label">ICON TERTIARY DISABLED</span>
        </button>
        <button className={`vds-btn-text--primary vds-btn--fullwidth`}>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          <span className="vds-btn--label">ICON PRIMARY FULL WIDTH</span>
        </button>
        <button className={`vds-btn-text--secondary vds-btn--fullwidth`}>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          <span className="vds-btn--label">ICON SECONDARY FULL WIDTH</span>
        </button>
        <button className={`vds-btn-text--tertiary vds-btn--fullwidth`}>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          <span className="vds-btn--label">ICON TERTIARY FULL WIDTH</span>
        </button>
        <button disabled className={`vds-btn-text--primary vds-btn--fullwidth`}>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          <span className="vds-btn--label">ICON PRIMARY FULL WIDTH DISABLED</span>
        </button>
        <button disabled className={`vds-btn-text--secondary vds-btn--fullwidth`}>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          <span className="vds-btn--label">ICON SECONDARY FULL WIDTH DISABLED</span>
        </button>
        <button disabled className={`vds-btn-text--tertiary vds-btn--fullwidth`}>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          <span className="vds-btn--label">ICON TERTIARY FULL WIDTH DISABLED</span>
        </button>

        <h2>Icon Dark</h2>
        <button className="vds-btn-icon--dark">
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
        </button>
        <button disabled className="vds-btn-icon--dark">
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
        </button>

        <h2>Icon Dark Tiny</h2>
        <button className="vds-btn-icon--dark--tiny">
          <Icon name="close" className="vds-btn--svg" resolution="tiny" />
        </button>
        <button disabled className="vds-btn-icon--dark--tiny">
          <Icon name="close" className="vds-btn--svg" resolution="tiny" />
        </button>

        <h2>Icon Light</h2>
        <button className="vds-btn-icon--light">
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
        </button>
        <button disabled className="vds-btn-icon--light">
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
        </button>

        <h2>Icon Light Outline</h2>
        <button className="vds-btn-icon--light--outline">
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
        </button>
        <button disabled className="vds-btn-icon--light--outline">
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
        </button>

        <h2>Icon Light Tiny</h2>
        <button className="vds-btn-icon--light--tiny">
          <Icon name="close" className="vds-btn--svg" resolution="tiny" />
        </button>
        <button disabled className="vds-btn-icon--light--tiny" type="button">
          <Icon name="close" className="vds-btn--svg" resolution="tiny" />
        </button>

        <h2>Menu</h2>
        <button className="vds-btn-menu--primary">
          <span className="vds-btn--label">MENU PRIMARY</span>
          <Icon name="dropdown" className="vds-btn--svg" resolution="tiny" />
        </button>
        <button disabled className="vds-btn-menu--primary">
          <span className="vds-btn--label">MENU PRIMARY DISABLED</span>
          <Icon name="dropdown" className="vds-btn--svg" resolution="tiny" />
        </button>
        <button className="vds-btn-menu--secondary">
          <span className="vds-btn--label">MENU SECONDARY</span>
          <Icon name="dropdown" className="vds-btn--svg" resolution="tiny" />
        </button>
        <button disabled className="vds-btn-menu--secondary">
          <span className="vds-btn--label">MENU SECONDARY DISABLED</span>
          <Icon name="dropdown" className="vds-btn--svg" resolution="tiny" />
        </button>

        <h2>Miscellaneous/Tests</h2>
        <button className="vds-btn-text--primary" type="button">button[type="button"]</button>
        <input className="vds-btn-text--primary" type="submit" value="input[type=&quot;submit&quot;]" />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae volutpat tellus. Donec sagittis mi quam, a ultricies est viverra et. Ut pharetra, nunc et luctus luctus, justo massa varius m<input className="vds-btn-text--primary" type="reset" value="input[type=&quot;reset&quot;]" />
        <input className="vds-btn-text--primary" type="button" value="input[type=&quot;button&quot;]" />
        <a className="vds-btn-text--primary" role="button" href="/home">a [role="button"]</a>
         ipsum at dolor malesuada maximus eget ut arcu. Aliquam erat volutpat. Praesent pretium magna vulputate mauris dapibus, nec commodo orci scelerisque.
        <span className={`vds-btn-text--primary vds-btn-text--primary-state--disabled`} role="button" tabIndex={0}>span[role="button"]</span>
        <div className="vds-btn-text--primary" role="button" tabIndex={0}>div[role="button"]</div>
        <button disabled className="vds-btn-text--primary">Text Primary</button>
        Suspendisse bibendum consequat tellus,<button className="vds-btn-text--primary" type="button">button[type="button"]</button>
        <button className="vds-btn-icon--light">
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
        </button>Praesent congue laoreet velit ut tincidunt. Nulla dignissim lacu
        <input className="vds-btn-text--primary" type="submit" value="input[type=&quot;submit&quot;]" />
        <input className="vds-btn-text--primary" type="reset" value="input[type=&quot;reset&quot;]" />
        <input className="vds-btn-text--primary" type="button" value="input[type=&quot;button&quot;]" />
        <a className={`vds-btn-text--primary vds-btn-text--primary-state--disabled`} role="button" href="/home">a[role="button"]</a>
        <span className="vds-btn-text--primary" role="button" tabIndex={0}>span[role="button"]</span>
        <div className="vds-btn-text--primary" role="button" tabIndex={0}>div[role="button"]</div>
        <button disabled className="vds-btn-menu--primary">
          <span className="vds-btn--label">DEFAULT</span>
          <Icon name="dropdown" className="vds-btn--svg" resolution="tiny" />
        </button>
        <button className="vds-btn-text--secondary" type="button">button[type="button"]</button>
         ipsum at dolor malesuada maximus eget ut arcu. Aliquam erat volutpat. Praesent pretium magna vulputate mauris dapibus, nec commodo orci scelerisque.
        <input className="vds-btn-text--secondary" type="submit" value="input[type=&quot;submit&quot;]" />
        <input className="vds-btn-text--secondary" type="reset" value="input[type=&quot;reset&quot;]" />
        <input className="vds-btn-text--secondary" type="button" value="input[type=&quot;button&quot;]" />
        <a className="vds-btn-text--secondary" role="button" href="/home">a [role="button"]</a>
        <span className={`vds-btn-text--secondary vds-btn-text--secondary-state--disabled`} role="button" tabIndex={0}>span[role="button"]</span>
        <div className="vds-btn-text--secondary" role="button" tabIndex={0}>div[role="button"]</div>
        <button disabled className="vds-btn-text--secondary">Text Primary</button>
        <button className="vds-btn-text--secondary" type="button">button[type="button"]</button>
        <input className="vds-btn-text--secondary" type="submit" value="input[type=&quot;submit&quot;]" />
        agittis blandit. Fusce porttitor ante luctus, tempor enim vel, pharetra leo. Mauris id est augue. Cras ultricies feugiat tellus. Integer non ipsum at dolor malesuada maximus <input className="vds-btn-text--secondary" type="reset" value="input[type=&quot;reset&quot;]" />
        <input className="vds-btn-text--secondary" type="button" value="input[type=&quot;button&quot;]" />
        <a className={`vds-btn-text--secondary vds-btn-text--secondary-state--disabled`} role="button" href="/home">a[role="button"]</a>
        <span className="vds-btn-text--secondary" role="button" tabIndex={0}>span[role="button"]</span>
        <div className="vds-btn-text--secondary" role="button" tabIndex={0}>div[role="button"]</div>
        <button className="vds-btn-text--tertiary">TERTIARY</button>
        <button disabled className={`vds-btn-text--secondary vds-btn--fullwidth`}>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          <span className="vds-btn--label">SECONDARY</span>
        </button>Praesent congue laoreet velit ut tincidunt. Nulla dignissim lacus in tempor posuere. Etia
        <button className="vds-btn-text--tertiary" type="button">button[type="button"]</button>Nam commodo massa et mi varius, sit amet tem
        <input className="vds-btn-text--tertiary" type="submit" value="input[type=&quot;submit&quot;]" />
        <input className="vds-btn-text--tertiary" type="reset" value="input[type=&quot;reset&quot;]" />
        <input className="vds-btn-text--tertiary" type="button" value="input[type=&quot;button&quot;]" />
        <a className="vds-btn-text--tertiary" role="button" href="/home">a [role="button"]</a>Vestibulum accumsan auctor arcu, id tempus dolor congue vitae. Phase
        <span className={`vds-btn-text--tertiary vds-btn-text--tertiary-state--disabled`} role="button" tabIndex={0}>span[role="button"]</span>
        <div className="vds-btn-text--tertiary" role="button" tabIndex={0}>div[role="button"]</div>
        <button disabled className="vds-btn-text--tertiary">Text Primary</button>quam tortor, consequat sit amet dictum vitae, sollicitudin vitae est. Vestibulum dictum sed quam sed efficitur. Ut non leo eu quam finibus viverra. Don
        <button className="vds-btn-text--tertiary" type="button">button[type="button"]</button>
        <input className="vds-btn-text--tertiary" type="submit" value="input[type=&quot;submit&quot;]" />
        <input className="vds-btn-text--tertiary" type="reset" value="input[type=&quot;reset&quot;]" />
        <input className="vds-btn-text--tertiary" type="button" value="input[type=&quot;button&quot;]" />
        <a className={`vds-btn-text--tertiary vds-btn-text--tertiary-state--disabled`} role="button" href="/home">a[role="button"]</a>
        <span className="vds-btn-text--tertiary" role="button" tabIndex={0}>span[role="button"]</span>
        <div className="vds-btn-text--tertiary" role="button" tabIndex={0}>div[role="button"]</div>
        <button className={`vds-btn-text--primary`}>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" role="img" />
          <span className="vds-btn--label">PRIMARY</span>
        </button> Sed dapibus arcu dolor, a mollis nunc pulvinar at. Sed vitae hendrerit magna. Curabitur sed ante eget lacus hendrerit placerat at sit amet sapien. Donec luctus scelerisque venenati
        <button className={`vds-btn-text--secondary`}>
          <span className="vds-btn--label">SECONDARY</span>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
        </button>
        <button className={`vds-btn-text--tertiary`}>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          <span className="vds-btn--label">TERTIARY</span>
        </button>estibulum accumsan auctor arcu, id tempus dolor congue vitae. Phasellus quam tortor, consequat sit amet dictum vitae, sollicitudin vitae est. Vestibulum dictum sed quam sed efficitur. Ut non leo eu quam finibus viverra. Donec faucibus nibh tellus, sit amet condimentum sem pellentesque malesuada. Interd
        <button disabled className={`vds-btn-text--primary`}>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          <span className="vds-btn--label">PRIMARY</span>
        </button>
        <button disabled className={`vds-btn-text--secondary`}>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          <span className="vds-btn--label">SECONDARY</span>
        </button>Etiam gravida lectus vitae risus facilisis, ut commodo lacus sollicitudin.
        <button disabled className={`vds-btn-text--tertiary`}>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          <span className="vds-btn--label">TERTIARY</span>
        </button>
        <button className={`vds-btn-text--primary vds-btn--fullwidth`}>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          <span className="vds-btn--label">PRIMARY</span>
        </button>nunc, lacinia et scelerisque sit am
        <button className={`vds-btn-text--secondary vds-btn--fullwidth`}>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          <span className="vds-btn--label">SECONDARY</span>
        </button>
        <button className={`vds-btn-text--tertiary vds-btn--fullwidth`}>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          <span className="vds-btn--label">TERTIARY</span>
        </button>
        <button disabled className={`vds-btn-text--primary vds-btn--fullwidth`}>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          <span className="vds-btn--label">PRIMARY</span>
        </button>justo sit amet velit suscipit feugiat se
        <button disabled className={`vds-btn-text--tertiary vds-btn--fullwidth`}>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          <span className="vds-btn--label">TERTIARY</span>
        </button>
        <button className="vds-btn-icon--dark">
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
        </button>
        <button className="vds-btn-icon--dark" type="button">
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
        </button>Suspendisse et tempor sapien. Fusce vitae fringilla 
        <a className="vds-btn-icon--dark" role="button" href="/home">
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
        </a>
        <span className={`vds-btn-icon--dark vds-btn-icon--dark-state--disabled`} role="button" tabIndex={0}>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
        </span>
        <div className="vds-btn-icon--dark" role="button" tabIndex={0}>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
        </div>
        <button className="vds-btn-icon--dark--tiny">
          <Icon name="close" className="vds-btn--svg" resolution="tiny" />
        </button>
        <button className="vds-btn-icon--dark--tiny" type="button">
          <Icon name="close" className="vds-btn--svg" resolution="tiny" />
        </button>
        <a className="vds-btn-icon--dark--tiny" role="button" href="/home">
          <Icon name="close" className="vds-btn--svg" resolution="tiny" />
        </a>
        <span className={`vds-btn-icon--dark--tiny vds-btn-icon--dark--tiny-state--disabled`} role="button" tabIndex={0}>
          <Icon name="close" className="vds-btn--svg" resolution="tiny" />
        </span>
        <div className="vds-btn-icon--dark--tiny" role="button" tabIndex={0}>
          <Icon name="close" className="vds-btn--svg" resolution="tiny" />
        </div>
        <button className="vds-btn-icon--light" type="button">
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
        </button>
        <a className="vds-btn-icon--light" role="button" href="/home">
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
        </a>
        <span className={`vds-btn-icon--light vds-btn-icon--light-state--disabled`} role="button" tabIndex={0}>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
        </span>
        <div className="vds-btn-icon--light" role="button" tabIndex={0}>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
        </div>

        <button className="vds-btn-icon--light--outline">
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
        </button>
        <button className="vds-btn-icon--light--outline" type="button">
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
        </button>
        <a className="vds-btn-icon--light--outline" role="button" href="/home">
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
        </a>
        <span className={`vds-btn-icon--light--outline vds-btn-icon--light--outline-state--disabled`} role="button" tabIndex={0}>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
        </span>
        <div className="vds-btn-icon--light--outline" role="button" tabIndex={0}>
          <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
        </div>Curabitur malesuada orci in sagittis blandit. Fu

        <button className="vds-btn-icon--light--tiny">
          <Icon name="close" className="vds-btn--svg" resolution="tiny" />
        </button>
        <button className="vds-btn-icon--light--tiny" type="button">
          <Icon name="close" className="vds-btn--svg" resolution="tiny" />
        </button>
        teger non ipsum at dolor malesuada maximu
        <a className="vds-btn-icon--light--tiny" role="button" href="/home">
          <Icon name="close" className="vds-btn--svg" resolution="tiny" />
        </a>
        <span className={`vds-btn-icon--light--tiny vds-btn-icon--light--tiny-state--disabled`} role="button" tabIndex={0}>
          <Icon name="close" className="vds-btn--svg" resolution="tiny" />
        </span>
        <div className="vds-btn-icon--light--tiny" role="button" tabIndex={0}>
          <Icon name="close" className="vds-btn--svg" resolution="tiny" />
        </div>

         volutpat odio. Sed dapibus arcu dolor, a 
        <button className="vds-btn-menu--primary">
          <span className="vds-btn--label">DEFAULT</span>
          <Icon name="dropdown" className="vds-btn--svg" resolution="tiny" />
        </button>
        <button className="vds-btn-menu--secondary">
          <span className="vds-btn--label">DEFAULT</span>
          <Icon name="dropdown" className="vds-btn--svg" resolution="tiny" />
        </button> placerat at sit amet sapien. Donec luctus sceleri
        <button disabled className="vds-btn-menu--secondary">
          <span className="vds-btn--label">DEFAULT</span>
          <Icon name="dropdown" className="vds-btn--svg" resolution="tiny" />
        </button>
        <div />
        <Icons />
      </div>
    );
  }
}

export default App;
