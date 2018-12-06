import React, { Component } from 'react';
import { ThemeProvider } from 'emotion-theming';
import Icons from './icons';
import Icon from './icon';
import './App.css';

const theme = {
  themeAvatarLogoBackground: 'brown'
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div onTouchStart={() => null}>
          <button className={`vds-btn-text--tertiary`} onClick={(e) => document.dir = document.dir === 'rtl' ? 'ltr' : 'rtl'}>Toggle Right to Left Support</button>
          <h2>Text</h2>
          <button className="vds-btn-text--primary">Primary</button>
          <button disabled className="vds-btn-text--primary">Primary Disabled</button>
          <button className="vds-btn-text--secondary">Secondary</button>
          <button disabled className="vds-btn-text--secondary">Secondary Disabled</button>
          <button className="vds-btn-text--tertiary">Tertiary</button>
          <button disabled className="vds-btn-text--tertiary">Tertiary Disabled</button>
          <button className={`vds-btn-text--primary vds-btn--fullwidth`}>Full Width Primary</button>
          <button className={`vds-btn-text--secondary vds-btn--fullwidth`}>Full Width Secondary</button>
          <button className={`vds-btn-text--tertiary vds-btn--fullwidth`}>Full Width Tertiary</button>
          <button disabled className={`vds-btn-text--primary vds-btn--fullwidth`}>Full Width Primary Disabled</button>
          <button disabled className={`vds-btn-text--secondary vds-btn--fullwidth`}>Full Width Secondary Disabled</button>
          <button disabled className={`vds-btn-text--tertiary vds-btn--fullwidth`}>Full Width Tertiary Disabled</button>
          <h2>Menu</h2>
          <button className="vds-btn-menu--primary">
            <span className="vds-btn--label">MENU Primary</span>
            <Icon name="dropdown" className="vds-btn--svg" resolution="tiny" />
          </button>
          <button disabled className="vds-btn-menu--primary">
            <span className="vds-btn--label">Menu Primary Disabled</span>
            <Icon name="dropdown" className="vds-btn--svg" resolution="tiny" />
          </button>
          <button className="vds-btn-menu--secondary">
            <span className="vds-btn--label">MENU Secondary</span>
            <Icon name="dropdown" className="vds-btn--svg" resolution="tiny" />
          </button>
          <button disabled className="vds-btn-menu--secondary">
            <span className="vds-btn--label">Menu Secondary Disabled</span>
            <Icon name="dropdown" className="vds-btn--svg" resolution="tiny" />
          </button>
          <h2>Text with Icon</h2>
          <button className={`vds-btn-text--primary`}>
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" role="img" />
            <span className="vds-btn--label">Primary</span>
          </button>
          <button className={`vds-btn-text--secondary`}>
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
            <span className="vds-btn--label">Secondary</span>
          </button>
          <button className={`vds-btn-text--tertiary`}>
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
            <span className="vds-btn--label">Tertiary</span>
          </button>
          <button disabled className={`vds-btn-text--primary`}>
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
            <span className="vds-btn--label">Primary Disabled</span>
          </button>
          <button disabled className={`vds-btn-text--secondary`}>
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
            <span className="vds-btn--label">Secondary Disabled</span>
          </button>
          <button disabled className={`vds-btn-text--tertiary`}>
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
            <span className="vds-btn--label">Tertiary Disabled</span>
          </button>
          <button className={`vds-btn-text--primary vds-btn--fullwidth`}>
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
            <span className="vds-btn--label">Primary Full Width</span>
          </button>
          <button className={`vds-btn-text--secondary vds-btn--fullwidth`}>
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
            <span className="vds-btn--label">Secondary Full Width</span>
          </button>
          <button className={`vds-btn-text--tertiary vds-btn--fullwidth`}>
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
            <span className="vds-btn--label">Tertiary Full Width</span>
          </button>
          <button disabled className={`vds-btn-text--primary vds-btn--fullwidth`}>
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
            <span className="vds-btn--label">Primary Full Width Disabled</span>
          </button>
          <button disabled className={`vds-btn-text--secondary vds-btn--fullwidth`}>
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
            <span className="vds-btn--label">Secondary Full Width Disabled</span>
          </button>
          <button disabled className={`vds-btn-text--tertiary vds-btn--fullwidth`}>
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
            <span className="vds-btn--label">Tertiary Full Width Disabled</span>
          </button>
          <div className="dark-background">
            <h2>Icon Dark</h2>
            <button className="vds-btn-icon--dark">
              <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
            </button>
            <button disabled className="vds-btn-icon--dark">
              <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
            </button>

            <h2>Icon Dark Outline</h2>
            <button className="vds-btn-icon--dark--outline">
              <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
            </button>
            <button disabled className="vds-btn-icon--dark--outline">
              <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
            </button>

            <h2>Icon Dark Tiny</h2>
            <button className="vds-btn-icon--dark--tiny">
              <Icon name="close" className="vds-btn--svg" resolution="tiny" />
            </button>
            <button disabled className="vds-btn-icon--dark--tiny">
              <Icon name="close" className="vds-btn--svg" resolution="tiny" />
            </button>
          </div>
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

          <h2>Miscellaneous/Tests</h2>
          <button className="vds-btn-text--primary" type="button">button[type="button"]</button>
          <input className="vds-btn-text--primary" type="submit" value="input[type=&quot;submit&quot;]" />
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae volutpat tellus. Donec sagittis mi quam, a ultricies est viverra et. Ut pharetra, nunc et luctus luctus, justo massa varius m</span>
          <input className="vds-btn-text--primary" type="reset" value="input[type=&quot;reset&quot;]" />
          <input className="vds-btn-text--primary" type="button" value="input[type=&quot;button&quot;]" />
          <a className="vds-btn-text--primary" role="button" href="/">a [role="button"]</a>
          <span>ipsum at dolor malesuada maximus eget ut arcu. Aliquam erat volutpat. Praesent pretium magna vulputate mauris dapibus, nec commodo orci scelerisque.</span>
          <span className={`vds-btn-text--primary vds-btn-text--primary-state--disabled`} tabIndex={-1} role="button">span[role="button"]</span>
          <div className="vds-btn-text--primary" role="button" tabIndex={0}>div[role="button"]</div>
          <button disabled className="vds-btn-text--primary">Text Primary</button>
          <span>Suspendisse bibendum consequat tellus,</span><button className="vds-btn-text--primary" type="button">button[type="button"]</button>
          <button className="vds-btn-icon--light">
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          </button>
          <span>Praesent congue laoreet velit ut tincidunt. Nulla dignissim lacu</span>
          <input className="vds-btn-text--primary" type="submit" value="input[type=&quot;submit&quot;]" />
          <input className="vds-btn-text--primary" type="reset" value="input[type=&quot;reset&quot;]" />
          <input className="vds-btn-text--primary" type="button" value="input[type=&quot;button&quot;]" />
          <a className={`vds-btn-text--primary vds-btn-text--primary-state--disabled`} tabIndex={-1} role="button" href="/">a[role="button"]</a>
          <span className="vds-btn-text--primary" role="button" tabIndex={0}>span[role="button"]</span>
          <div className="vds-btn-text--primary" role="button" tabIndex={0}>div[role="button"]</div>
          <button disabled className="vds-btn-menu--primary">
            <span className="vds-btn--label">Default</span>
            <Icon name="dropdown" className="vds-btn--svg" resolution="tiny" />
          </button>
          <button className="vds-btn-text--secondary" type="button">button[type="button"]</button>
          <span>ipsum at dolor malesuada maximus eget ut arcu. Aliquam erat volutpat. Praesent pretium magna vulputate mauris dapibus, nec commodo orci scelerisque.</span>
          <input className="vds-btn-text--secondary" type="submit" value="input[type=&quot;submit&quot;]" />
          <input className="vds-btn-text--secondary" type="reset" value="input[type=&quot;reset&quot;]" />
          <input className="vds-btn-text--secondary" type="button" value="input[type=&quot;button&quot;]" />
          <a className="vds-btn-text--secondary" role="button" href="/">a [role="button"]</a>
          <span className={`vds-btn-text--secondary vds-btn-text--secondary-state--disabled`} tabIndex={-1} role="button">span[role="button"]</span>
          <div className="vds-btn-text--secondary" role="button" tabIndex={0}>div[role="button"]</div>
          <button disabled className="vds-btn-text--secondary">Text Primary</button>
          <button className="vds-btn-text--secondary" type="button">button[type="button"]</button>
          <input className="vds-btn-text--secondary" type="submit" value="input[type=&quot;submit&quot;]" />
          <span>agittis blandit. Fusce porttitor ante luctus, tempor enim vel, pharetra leo. Mauris id est augue. Cras ultricies feugiat tellus. Integer non ipsum at dolor malesuada maximus</span>
          <input className="vds-btn-text--secondary" type="reset" value="input[type=&quot;reset&quot;]" />
          <input className="vds-btn-text--secondary" type="button" value="input[type=&quot;button&quot;]" />
          <a className={`vds-btn-text--secondary vds-btn-text--secondary-state--disabled`} tabIndex={-1} role="button" href="/">a[role="button"]</a>
          <span className="vds-btn-text--secondary" role="button" tabIndex={0}>span[role="button"]</span>
          <div className="vds-btn-text--secondary" role="button" tabIndex={0}>div[role="button"]</div>
          <button className="vds-btn-text--tertiary">Tertiary</button>
          <button disabled className={`vds-btn-text--secondary vds-btn--fullwidth`}>
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
            <span className="vds-btn--label">Secondary</span>
          </button>
          <span>Praesent congue laoreet velit ut tincidunt. Nulla dignissim lacus in tempor posuere. Etia</span>
          <button className="vds-btn-text--tertiary" type="button">button[type="button"]</button>
          <span>Nam commodo massa et mi varius, sit amet tem</span>
          <input className="vds-btn-text--tertiary" type="submit" value="input[type=&quot;submit&quot;]" />
          <input className="vds-btn-text--tertiary" type="reset" value="input[type=&quot;reset&quot;]" />
          <input className="vds-btn-text--tertiary" type="button" value="input[type=&quot;button&quot;]" />
          <a className="vds-btn-text--tertiary" role="button" href="/">a [role="button"]</a>
          <span>Vestibulum accumsan auctor arcu, id tempus dolor congue vitae. Phase</span>
          <span className={`vds-btn-text--tertiary vds-btn-text--tertiary-state--disabled`} tabIndex={-1} role="button">span[role="button"]</span>
          <div className="vds-btn-text--tertiary" role="button" tabIndex={0}>div[role="button"]</div>
          <button disabled className="vds-btn-text--tertiary">Text Primary</button>
          <span>quam tortor, consequat sit amet dictum vitae, sollicitudin vitae est. Vestibulum dictum sed quam sed efficitur. Ut non leo eu quam finibus viverra. Don</span>
          <button className="vds-btn-text--tertiary" type="button">button[type="button"]</button>
          <input className="vds-btn-text--tertiary" type="submit" value="input[type=&quot;submit&quot;]" />
          <input className="vds-btn-text--tertiary" type="reset" value="input[type=&quot;reset&quot;]" />
          <input className="vds-btn-text--tertiary" type="button" value="input[type=&quot;button&quot;]" />
          <a className={`vds-btn-text--tertiary vds-btn-text--tertiary-state--disabled`} tabIndex={-1} role="button" href="/">a[role="button"]</a>
          <span className="vds-btn-text--tertiary" role="button" tabIndex={0}>span[role="button"]</span>
          <div className="vds-btn-text--tertiary" role="button" tabIndex={0}>div[role="button"]</div>
          <button className={`vds-btn-text--primary`}>
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" role="img" />
            <span className="vds-btn--label">Primary</span>
          </button>
          <span>Sed dapibus arcu dolor, a mollis nunc pulvinar at. Sed vitae hendrerit magna. Curabitur sed ante eget lacus hendrerit placerat at sit amet sapien. Donec luctus scelerisque venenati</span>
          <button className={`vds-btn-text--secondary`}>
            <span className="vds-btn--label">Secondary</span>
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          </button>
          <button className={`vds-btn-text--tertiary`}>
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
            <span className="vds-btn--label">Tertiary</span>
          </button>
          <span>estibulum accumsan auctor arcu, id tempus dolor congue vitae. Phasellus quam tortor, consequat sit amet dictum vitae, sollicitudin vitae est. Vestibulum dictum sed quam sed efficitur. Ut non leo eu quam finibus viverra. Donec faucibus nibh tellus, sit amet condimentum sem pellentesque malesuada. Interd</span>
          <button disabled className={`vds-btn-text--primary`}>
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
            <span className="vds-btn--label">Primary</span>
          </button>
          <button disabled className={`vds-btn-text--secondary`}>
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
            <span className="vds-btn--label">Secondary</span>
          </button>
          <span>Etiam gravida lectus vitae risus facilisis, ut commodo lacus sollicitudin.</span>
          <button disabled className={`vds-btn-text--tertiary`}>
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
            <span className="vds-btn--label">Tertiary</span>
          </button>
          <button className={`vds-btn-text--primary vds-btn--fullwidth`}>
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
            <span className="vds-btn--label">Primary</span>
          </button>
          <span>nunc, lacinia et scelerisque sit am</span>
          <button className={`vds-btn-text--secondary vds-btn--fullwidth`}>
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
            <span className="vds-btn--label">Secondary</span>
          </button>
          <button className={`vds-btn-text--tertiary vds-btn--fullwidth`}>
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
            <span className="vds-btn--label">Tertiary</span>
          </button>
          <button disabled className={`vds-btn-text--primary vds-btn--fullwidth`}>
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
            <span className="vds-btn--label">Primary</span>
          </button>
          <span>justo sit amet velit suscipit feugiat se</span>
          <button disabled className={`vds-btn-text--tertiary vds-btn--fullwidth`}>
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
            <span className="vds-btn--label">Tertiary</span>
          </button>
          <button className="vds-btn-icon--dark">
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          </button>
          <button className="vds-btn-icon--dark" type="button">
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          </button>
          <span>Suspendisse et tempor sapien. Fusce vitae fringilla</span>
          <a className="vds-btn-icon--dark" role="button" href="/">
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          </a>
          <span className={`vds-btn-icon--dark vds-btn-icon--dark-state--disabled`} tabIndex={-1} role="button">
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
          <a className="vds-btn-icon--dark--tiny" role="button" href="/">
            <Icon name="close" className="vds-btn--svg" resolution="tiny" />
          </a>
          <span className={`vds-btn-icon--dark--tiny vds-btn-icon--dark--tiny-state--disabled`} tabIndex={-1} role="button">
            <Icon name="close" className="vds-btn--svg" resolution="tiny" />
          </span>
          <div className="vds-btn-icon--dark--tiny" role="button" tabIndex={0}>
            <Icon name="close" className="vds-btn--svg" resolution="tiny" />
          </div>
          <button className="vds-btn-icon--light" type="button">
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          </button>
          <a className="vds-btn-icon--light" role="button" href="/">
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          </a>
          <span className={`vds-btn-icon--light vds-btn-icon--light-state--disabled`} tabIndex={-1} role="button">
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
          <a className="vds-btn-icon--light--outline" role="button" href="/">
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          </a>
          <span className={`vds-btn-icon--light--outline vds-btn-icon--light--outline-state--disabled`} tabIndex={-1} role="button">
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          </span>
          <div className="vds-btn-icon--light--outline" role="button" tabIndex={0}>
            <Icon className="vds-btn--svg" name="scan-qr" resolution="low" />
          </div>
          <span>Curabitur malesuada orci in sagittis blandit. Fu</span>
          <button className="vds-btn-icon--light--tiny">
            <Icon name="close" className="vds-btn--svg" resolution="tiny" />
          </button>
          <button className="vds-btn-icon--light--tiny" type="button">
            <Icon name="close" className="vds-btn--svg" resolution="tiny" />
          </button>
          <span>teger non ipsum at dolor malesuada maximu</span>
          <a className="vds-btn-icon--light--tiny" role="button" href="/">
            <Icon name="close" className="vds-btn--svg" resolution="tiny" />
          </a>
          <span className={`vds-btn-icon--light--tiny vds-btn-icon--light--tiny-state--disabled`} tabIndex={-1} role="button">
            <Icon name="close" className="vds-btn--svg" resolution="tiny" />
          </span>
          <div className="vds-btn-icon--light--tiny" role="button" tabIndex={0}>
            <Icon name="close" className="vds-btn--svg" resolution="tiny" />
          </div>

           <span>volutpat odio. Sed dapibus arcu dolor, a</span>
          <button className="vds-btn-menu--primary">
            <span className="vds-btn--label">Default</span>
            <Icon name="dropdown" className="vds-btn--svg" resolution="tiny" />
          </button>
          <button className="vds-btn-menu--secondary">
            <span className="vds-btn--label">Default</span>
            <Icon name="dropdown" className="vds-btn--svg" resolution="tiny" />
          </button> 
          <span>placerat at sit amet sapien. Donec luctus sceleri</span>
          <button disabled className="vds-btn-menu--secondary">
            <span className="vds-btn--label">Default</span>
            <Icon name="dropdown" className="vds-btn--svg" resolution="tiny" />
          </button>
          <div />
          <Icons />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
