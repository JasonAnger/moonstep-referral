import { useState } from "react"
export default function Header() {
    const [isOpenNavbar, setIsOpenNavbar] = useState(false)
    return (
        <header className="aux-elementor-header" id="site-elementor-header" data-sticky-height="80">
            <div className="aux-wrapper">
                <div className="aux-header aux-header-elements-wrapper">
                    <div data-elementor-type="header" data-elementor-id="76" className="elementor elementor-76">
                        <section
                            className="elementor-section elementor-top-section elementor-element elementor-element-54a26d6 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="54a26d6" data-element_type="section">
                            <div className="elementor-container elementor-column-gap-no">
                                <div className="aux-parallax-section elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-99ffd65"
                                    data-id="99ffd65" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <div className="elementor-element elementor-element-c49eb21 elementor-widget__width-auto elementor-widget-mobile__width-auto aux-appear-watch-animation aux-scale-up-1 elementor-widget elementor-widget-aux_logo aux-animated aux-animated-once"
                                            data-id="c49eb21" data-element_type="widget" data-widget_type="aux_logo.default">
                                            <div className="elementor-widget-container">
                                                <div className="aux-widget-logo">
                                                    <a className="aux-logo-anchor aux-has-logo"
                                                        title="Moon Step" href="https://moonstep.app/"><img width="200"
                                                            height="74" src="https://moonstep.app/ajuroalu/2022/05/MS_logo.png"
                                                            className="aux-attachment aux-featured-image attachment-200x74 aux-attachment-id-615 "
                                                            alt="MS_logo" data-ratio="2.7" data-original-w="200" /></a>
                                                    <a className="aux-logo-anchor aux-logo-sticky aux-logo-hidden aux-has-logo"
                                                        title="Moon Step" href="https://moonstep.app/"><img width="200"
                                                            height="74" src="https://moonstep.app/ajuroalu/2022/05/MS_logo.png"
                                                            className="aux-attachment aux-featured-image attachment-200x74 aux-attachment-id-615 "
                                                            alt="MS_logo" data-ratio="2.7" data-original-w="200" /></a>
                                                    <section className="aux-logo-text">
                                                        <h3 className="site-title"><a href="https://moonstep.app/"
                                                            title="Moon Step">Moon Step</a></h3>
                                                        <p className="site-description">| Move To Earn | From Health to Wealth!
                                                        </p>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="elementor-element elementor-element-5be05c4 elementor-widget__width-auto aux-appear-watch-animation aux-fade-in-left elementor-widget elementor-widget-aux_modern_heading aux-animated aux-animated-once"
                                            data-id="5be05c4" data-element_type="widget"
                                            data-widget_type="aux_modern_heading.default">
                                            <div className="elementor-widget-container">
                                                <section className="aux-widget-modern-heading">
                                                    <div className="aux-widget-inner"><a href="https://moonstep.app/"
                                                        className="aux-modern-heading-primary-link">
                                                        <h2 className="aux-modern-heading-primary"></h2>
                                                    </a></div>
                                                </section>
                                            </div>
                                        </div>
                                        <div className="elementor-element elementor-element-d052931 elementor-widget__width-auto elementor-widget-tablet__width-auto elementor-widget-mobile__width-auto aux-appear-watch-animation aux-fade-in-left elementor-widget elementor-widget-aux_menu_box aux-animated aux-animated-once"
                                            data-id="d052931" data-element_type="widget"
                                            data-widget_type="aux_menu_box.default">
                                            <div className="elementor-widget-container">
                                                <div
                                                    className="aux-elementor-header-menu aux-nav-menu-element aux-nav-menu-element-d052931">
                                                    <div onClick={() => setIsOpenNavbar(!isOpenNavbar)} className={isOpenNavbar ? "aux-burger aux-regular-medium aux-close" : "aux-burger-box"} data-target-panel="toggle-bar"
                                                        data-target-content=".elementor-element-d052931 .aux-master-menu">
                                                        <div className="aux-burger aux-regular-medium"><span
                                                            className="mid-line"></span></div>
                                                    </div>
                                                    <nav id="master-menu-elementor-d052931"
                                                        className="menu-header-menu-container">
                                                        <ul id="menu-header-menu"
                                                            className="aux-master-menu aux-skin-classic aux-horizontal aux-wide"
                                                            data-type="horizontal" data-switch-type="toggle"
                                                            data-switch-parent=".elementor-element-d052931 .aux-toggle-menu-bar"
                                                            data-switch-width="767">
                                                            <li id="menu-item-273"
                                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-75 current_page_item menu-item-273 aux-menu-depth-0 aux-menu-root-1 aux-menu-item">
                                                                <a href="https://moonstep.app/" className="aux-item-content">
                                                                    <span className="aux-menu-label">Home</span>
                                                                </a>
                                                            </li>
                                                            <li id="menu-item-231"
                                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home page_item page-item-75 current_page_item menu-item-231 aux-menu-depth-0 aux-menu-root-2 aux-menu-item">
                                                                <a href="https://moonstep.app/#howtoplay"
                                                                    className="aux-item-content">
                                                                    <span className="aux-menu-label">How to play</span>
                                                                </a>
                                                            </li>
                                                            <li id="menu-item-686"
                                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-686 aux-menu-depth-0 aux-menu-root-3 aux-menu-item">
                                                                <a href="https://docs.moonstep.app/"
                                                                    className="aux-item-content">
                                                                    <span className="aux-menu-label">Whitepaper</span>
                                                                </a>
                                                            </li>
                                                            <li id="menu-item-1017"
                                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1017 aux-menu-depth-0 aux-menu-root-4 aux-menu-item">
                                                                <a href="https://moonstep.app/pd" className="aux-item-content">
                                                                    <span className="aux-menu-label">Pitch Deck</span>
                                                                </a>
                                                            </li>
                                                            <li id="menu-item-1348"
                                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1348 aux-menu-depth-0 aux-menu-root-5 aux-menu-item">
                                                                <a href="https://privacy.moonstep.app/"
                                                                    className="aux-item-content">
                                                                    <span className="aux-menu-label">Privacy Policy</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                    <div className="aux-toggle-menu-bar" style={isOpenNavbar ? { height: "auto" } : { height: "0px" }}>
                                                        <ul id="menu-header-menu" className="aux-master-menu aux-skin-classic aux-toggle aux-narrow" data-type="horizontal"
                                                            data-switch-type="toggle" data-switch-parent=".elementor-element-d052931 .aux-toggle-menu-bar"
                                                            data-switch-width="767">
                                                            <li id="menu-item-273"
                                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-75 current_page_item menu-item-273 aux-menu-depth-0 aux-menu-root-1 aux-menu-item">
                                                                <a href="https://moonstep.app/" className="aux-item-content">
                                                                    <span className="aux-menu-label">Home</span>
                                                                </a>
                                                            </li>
                                                            <li id="menu-item-231"
                                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home page_item page-item-75 current_page_item menu-item-231 aux-menu-depth-0 aux-menu-root-2 aux-menu-item">
                                                                <a href="https://moonstep.app/#howtoplay" className="aux-item-content">
                                                                    <span className="aux-menu-label">How to play</span>
                                                                </a>
                                                            </li>
                                                            <li id="menu-item-686"
                                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-686 aux-menu-depth-0 aux-menu-root-3 aux-menu-item">
                                                                <a href="https://docs.moonstep.app/" className="aux-item-content">
                                                                    <span className="aux-menu-label">Whitepaper</span>
                                                                </a>
                                                            </li>
                                                            <li id="menu-item-1017"
                                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1017 aux-menu-depth-0 aux-menu-root-4 aux-menu-item">
                                                                <a href="https://moonstep.app/pd" className="aux-item-content">
                                                                    <span className="aux-menu-label">Pitch Deck</span>
                                                                </a>
                                                            </li>
                                                            <li id="menu-item-1348"
                                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1348 aux-menu-depth-0 aux-menu-root-5 aux-menu-item">
                                                                <a href="https://privacy.moonstep.app/" className="aux-item-content">
                                                                    <span className="aux-menu-label">Privacy Policy</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </header>
    )
}