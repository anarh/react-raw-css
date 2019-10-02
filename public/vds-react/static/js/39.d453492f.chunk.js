(window["webpackJsonp@visa/vds-react"]=window["webpackJsonp@visa/vds-react"]||[]).push([[39],{248:function(e,t,a){"use strict";a.r(t);var n=a(96),r=a(513),o=a(0),l=a.n(o),c=a(4),s=a.n(c),i=a(516),d=a(514),p=a.n(d),u=a(37),m=a(8),f=a(504),v=a(16),h=a(23),b=a(17),g=a(505),O=a(60),y=a(132),w=a(506),E=a(507),j=a(508),T=a(509),k=a(510),C=a(7),N=a(135),x=a(529),R=a(813),S=a(5),P=function(e){var t=e.children,a=e.className,n=Object(S.a)(e,["children","className"]);return l.a.createElement("ul",Object.assign({className:s()("vds-wizard",a)},n),t)};P.displayName="Wizard";var z=P,B=a(2),H=a(3),W=Object(o.forwardRef)((function(e,t){var a,n=e.active,r=e.children,o=e.className,c=e.completed,i=e.error,d=Object(S.a)(e,["active","children","className","completed","error"]);return l.a.createElement("li",Object.assign({className:s()("vds-wizard-step",(a={},Object(B.a)(a,"".concat("vds-state","--active"),Boolean(n)),Object(B.a)(a,"".concat("vds-state","--completed"),Boolean(c)),Object(B.a)(a,"".concat("vds-state","--error"),Boolean(i)),a),o),ref:t,style:n?{boxShadow:"0 0 0 1px #003ea9"}:void 0},d),r)}));W.propTypes={active:H.bool,children:H.node,className:H.string,completed:H.bool,error:H.bool},W.displayName="WizardStep";var L=W,I=function(){var e=Object(o.useState)({steps:[{active:!0,completed:!1,error:!1,label:"1"},{active:!1,completed:!1,error:!1,label:"2"},{active:!1,completed:!1,error:!1,label:"3"},{active:!1,completed:!1,error:!1,label:"4"},{active:!1,completed:!1,error:!1,label:"5"},{active:!1,completed:!1,error:!1,label:"6"},{active:!1,completed:!1,error:!1,label:"7"},{active:!1,completed:!1,error:!1,label:"8"}]}),t=Object(n.a)(e,2),a=t[0],r=t[1];return l.a.createElement(h.a,null,l.a.createElement(b.a,null,l.a.createElement(m.a,null,l.a.createElement(C.a,{tag:"h2"},"Wizard (BYO-State) Bring your own state"))),l.a.createElement(b.a,null,l.a.createElement(m.a,null,l.a.createElement(z,null,a.steps.map((function(e,t){return l.a.createElement(L,{key:t,active:e.active,completed:e.completed,error:e.error},l.a.createElement(R.a,{tooltip:"Step ".concat(e.label),placement:"top",trigger:"hover",id:"stepper-".concat(t)},l.a.createElement(N.a,{ariaLabel:e.label,iconType:"light-tiny"},e.error?"!":e.label)))}))))),l.a.createElement(b.a,null,l.a.createElement(m.a,null,l.a.createElement(x.a,{disabled:0===a.steps.findIndex((function(e){return!0===e.active})),onClick:function(){var e=a.steps.findIndex((function(e){return!0===e.active}));e=-1===e?a.steps.length:e;var t=a.steps.map((function(t,a){return{active:a===e-1,completed:a<e-1,error:a<=e-1&&(1===a||t.error),label:t.label}}));r({steps:t})}},"Previous"),l.a.createElement(x.a,{disabled:-1===a.steps.findIndex((function(e){return!0===e.active})),onClick:function(){var e=a.steps.findIndex((function(e){return!0===e.active})),t=a.steps.map((function(t,a){return{active:a===e+1,completed:a<=e,error:a<=e&&(1===a||t.error),label:t.label}}));r({steps:t})}},"Next"))))},M=a(515),X="import React from 'react';\nimport { node, string } from 'prop-types';\nimport classnames from 'classnames';\n\nconst CSS_PREFIX = 'vds-wizard';\n\nconst Wizard = ({ children, className, ...remainingProps }) => (\n  <ul\n    className={classnames(CSS_PREFIX, className)}\n    {...remainingProps}\n  >\n    {children}\n  </ul>\n);\n\nWizard.propTypes = {\n  /**\n  * @ignore\n  */\n  children: node,\n\n  /**\n   * @ignore\n   */\n  className: string\n};\n\nWizard.displayName = 'Wizard';\n\nexport default Wizard;\n".replace("= memo(({","= React.forwardRef(({").replace("cloneElement(","React.cloneElement("),Y="import React, { useState } from 'react';\nimport ButtonIcon from '../../button-icon';\nimport ButtonText from '../../button-text';\nimport Col from '../../col';\nimport Grid from '../../grid';\nimport Row from '../../row';\nimport Tooltip from '../../tooltip';\nimport Typography from '../../typography';\nimport Wizard from '../../wizard';\nimport WizardStep from '../../wizard-step';\n\nconst WizardExample = () => {\n  const [state, setState] = useState({\n    steps: [\n      {\n        active: true,\n        completed: false,\n        error: false,\n        label: '1'\n      },\n      {\n        active: false,\n        completed: false,\n        error: false,\n        label: '2'\n      },\n      {\n        active: false,\n        completed: false,\n        error: false,\n        label: '3'\n      },\n      {\n        active: false,\n        completed: false,\n        error: false,\n        label: '4'\n      },\n      {\n        active: false,\n        completed: false,\n        error: false,\n        label: '5'\n      },\n      {\n        active: false,\n        completed: false,\n        error: false,\n        label: '6'\n      },\n      {\n        active: false,\n        completed: false,\n        error: false,\n        label: '7'\n      },\n      {\n        active: false,\n        completed: false,\n        error: false,\n        label: '8'\n      }]\n  });\n\n  const handleClickPrevious = () => {\n    let index = state.steps.findIndex(step => step.active === true);\n    index = index === -1 ? state.steps.length : index;\n    const steps = state.steps.map((step, k) => ({\n      active: k === index - 1,\n      completed: k < index - 1, // use your own logic to determine completed state\n      error: k <= index - 1 ? (k === 1 ? true : step.error) : false, // set first item to error for demo\n      label: step.label\n    }));\n\n    setState({ steps });\n  };\n\n  const handleClickNext = () => {\n    const index = state.steps.findIndex(step => step.active === true);\n    const steps = state.steps.map((step, k) => ({\n      active: k === index + 1,\n      completed: k <= index, // use your own logic/state to determine completed state\n      error: k <= index ? (k === 1 ? true : step.error) : false, // set first item to error for demo\n      label: step.label\n    }));\n\n    setState({ steps });\n  };\n\n  return (\n    <Grid>\n      <Row>\n        <Col>\n          <Typography tag=\"h2\">Wizard (BYO-State) Bring your own state</Typography>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <Wizard>\n            {\n              state.steps.map((step, key) => (\n                <WizardStep\n                  key={key}\n                  active={step.active}\n                  completed={step.completed}\n                  error={step.error}\n                >\n                  <Tooltip\n                    tooltip={`Step ${step.label}`}\n                    placement=\"top\"\n                    trigger=\"hover\"\n                    id={`stepper-${key}`}\n                  >\n                    <ButtonIcon\n                      ariaLabel={step.label}\n                      iconType=\"light-tiny\"\n                    >\n                      {step.error ? '!' : step.label}\n                    </ButtonIcon>\n                  </Tooltip>\n                </WizardStep>\n              ))\n            }\n          </Wizard>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <ButtonText\n            disabled={state.steps.findIndex(step => step.active === true) === 0}\n            onClick={handleClickPrevious}\n          >\n            Previous\n          </ButtonText>\n\n          <ButtonText\n            disabled={state.steps.findIndex(step => step.active === true) === -1}\n            onClick={handleClickNext}\n          >\n            Next\n          </ButtonText>\n        </Col>\n      </Row>\n    </Grid>\n  );\n};\n\nexport default WizardExample;\n".replace(/'..\/..\//g,"'@visa/vds-react/"),D=function(e){var t=Object(r.a)({},e),a=Object(o.useState)({}),c=Object(n.a)(a,2),d=c[0],N=c[1];return Object(o.useEffect)((function(){try{N(M.parse(X))}catch(e){console.log("\n        React-docgen could not parse props for Wizard\n        check for fix here https://github.com/reactjs/react-docgen/issues/342")}}),[]),l.a.createElement(h.a,{siblingOfStickyFooter:!0},l.a.createElement(b.a,null,l.a.createElement(m.a,null,l.a.createElement(C.a,{tag:"h1"},"Wizard"))),l.a.createElement(b.a,null,l.a.createElement(m.a,null,l.a.createElement(y.a,null,l.a.createElement(O.a,{tag:l.a.createElement(u.c,{exact:!0,to:"".concat("/vds-react","/components/wizard"),activeClassName:"vds-state--selected"})},l.a.createElement(v.a,{name:"log",resolution:"low"}),"Wizard Example"),l.a.createElement(O.a,{tag:l.a.createElement(u.c,{exact:!0,to:"".concat("/vds-react","/components/wizard/code"),activeClassName:"vds-state--selected"})},l.a.createElement(v.a,{name:"code-fork-code-alt",resolution:"low"}),"Code for Wizard Example")))),l.a.createElement(b.a,null,l.a.createElement(m.a,null,l.a.createElement("div",{className:s()({"vds-state--hidden":t.match.path==="".concat("/vds-react","/components/wizard/code"),"vds-state--show":t.match.path!=="".concat("/vds-react","/components/wizard/code")})},l.a.createElement(I,t)),l.a.createElement("div",{className:s()({"vds-state--hidden":t.match.path!=="".concat("/vds-react","/components/wizard/code"),"vds-state--show":t.match.path==="".concat("/vds-react","/components/wizard/code")})},l.a.createElement(i.a,Object.assign({},i.b,{theme:p.a,code:Y,language:"jsx"}),(function(e){var t=e.className,a=e.style,n=e.tokens,r=e.getLineProps,o=e.getTokenProps;return l.a.createElement("pre",{className:t,style:a},n.map((function(e,t){return l.a.createElement("div",r({key:t,line:e}),l.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},t+1),e.map((function(e,t){return l.a.createElement("span",o({key:t,token:e}))})))})))}))))),l.a.createElement(b.a,null,l.a.createElement(m.a,null,l.a.createElement(f.a,{className:s()(["components"]),dividerLines:!0,size:"compact"},l.a.createElement(g.a,{tag:"caption"},"Props"),l.a.createElement(T.a,null,l.a.createElement(k.a,{className:"vds-tr"},l.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Prop"),l.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Type"),l.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Default"),l.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Description"))),l.a.createElement(w.a,null,d.props&&Object.entries(d.props).filter((function(e){return"@ignore"!==e[1].description})).map((function(e,t){return l.a.createElement(k.a,{className:"vds-tr",key:t,tabIndex:"0"},l.a.createElement(E.a,{className:"vds-td"},e[0]," ",e[1].required?l.a.createElement("sup",{style:{color:"red"}}," required"):""),l.a.createElement(E.a,{className:"vds-td"},l.a.createElement("strong",null,e[1].type.name),e[1].type.value&&e[1].type.value.length?l.a.createElement("small",{style:{color:"#1a1f71"}},l.a.createElement("br",null),e[1].type.value.length?e[1].type.value.map((function(e){return e.value||e.name})).join(", "):void 0):""),l.a.createElement(E.a,{className:"vds-td"},e[1].defaultValue?e[1].defaultValue.value:""),l.a.createElement(E.a,{className:"vds-td"},e[1].description))})))))))};D.displayName="WizardExample";t.default=D},504:function(e,t,a){"use strict";var n=a(2),r=a(5),o=a(0),l=a.n(o),c=a(3),s=a(4),i=a.n(s),d=Object(o.forwardRef)((function(e,t){var a,o=e.children,c=e.className,s=e.customizableColumns,d=e.dividerLines,p=e.keyValuePairs,u=e.reveal,m=e.revealFirstColumn,f=e.revealLastColumn,v=e.rowSelection,h=e.size,b=e.stickyHeader,g=Object(r.a)(e,["children","className","customizableColumns","dividerLines","keyValuePairs","reveal","revealFirstColumn","revealLastColumn","rowSelection","size","stickyHeader"]);return l.a.createElement("table",Object.assign({},g,{className:i()("vds-data-table",(a={},Object(n.a)(a,"".concat("vds-state","--customizable-columns"),Boolean(s)),Object(n.a)(a,"".concat("vds-state","--divider-lines"),Boolean(d)),Object(n.a)(a,"".concat("vds-state","--key-value-pairs"),Boolean(p)),Object(n.a)(a,"".concat("vds-state","--").concat(h),Boolean(h)),Object(n.a)(a,"".concat("vds-state","--reveal"),Boolean(u)),Object(n.a)(a,"".concat("vds-state","--reveal-first-column"),Boolean(m)),Object(n.a)(a,"".concat("vds-state","--reveal-last-column"),Boolean(f)),Object(n.a)(a,"".concat("vds-state","--").concat(v),Boolean(v)),Object(n.a)(a,"".concat("vds-state","--sticky-header"),Boolean(b)),a),c),ref:t}),o)}));d.propTypes={children:c.node,className:c.string,columns:Object(c.arrayOf)(Object(c.shape)({})),customizableColumns:c.bool,data:Object(c.arrayOf)(Object(c.shape)({})),dividerLines:c.bool,keyValuePairs:c.bool,reveal:c.bool,revealFirstColumn:c.bool,revealLastColumn:c.bool,rowSelection:Object(c.oneOf)(["multi-select","single-select"]),size:Object(c.oneOf)(["compact"]),stickyHeader:c.bool},d.displayName="DataTable",t.a=d},505:function(e,t,a){"use strict";var n=a(5),r=a(0),o=a.n(r),l=a(3),c=a(4),s=a.n(c),i=Object(r.forwardRef)((function(e,t){var a=e.children,r=e.className,l=e.tag,c=Object(n.a)(e,["children","className","tag"]);return o.a.createElement(l,Object.assign({className:s()("vds-sr",r),ref:t},c),a)}));i.propTypes={children:l.node,className:l.string,tag:l.elementType},i.defaultProps={tag:"span"},i.displayName="Sr",t.a=i},506:function(e,t,a){"use strict";var n=a(5),r=a(0),o=a.n(r),l=a(3),c=a(4),s=a.n(c),i=Object(r.forwardRef)((function(e,t){var a=e.children,r=e.className,l=Object(n.a)(e,["children","className"]);return o.a.createElement("tbody",Object.assign({className:s()("vds-tbody",r),ref:t},l),a)}));i.propTypes={children:l.node,className:l.string},i.displayName="Tbody",t.a=i},507:function(e,t,a){"use strict";var n=a(2),r=a(5),o=a(0),l=a.n(o),c=a(3),s=a(4),i=a.n(s),d=Object(o.forwardRef)((function(e,t){var a=e.children,o=e.className,c=e.textAlign,s=Object(r.a)(e,["children","className","textAlign"]);return l.a.createElement("td",Object.assign({className:i()("vds-td",Object(n.a)({},"vds-text--".concat(c),Boolean(c)),o),ref:t},s),a)}));d.propTypes={children:c.node,className:c.string,textAlign:Object(c.oneOf)(["center","left","right"])},d.displayName="Td",t.a=d},508:function(e,t,a){"use strict";var n=a(5),r=a(0),o=a.n(r),l=a(3),c=a(4),s=a.n(c),i=Object(r.forwardRef)((function(e,t){var a=e.children,r=e.className,l=Object(n.a)(e,["children","className"]);return o.a.createElement("th",Object.assign({className:s()("vds-th",r),ref:t},l),a)}));i.propTypes={children:l.node,className:l.string},i.displayName="Th",t.a=i},509:function(e,t,a){"use strict";var n=a(5),r=a(0),o=a.n(r),l=a(3),c=a(4),s=a.n(c),i=Object(r.forwardRef)((function(e,t){var a=e.children,r=e.className,l=Object(n.a)(e,["children","className"]);return o.a.createElement("thead",Object.assign({className:s()("vds-thead",r),ref:t},l),a)}));i.propTypes={children:l.node,className:l.string},i.displayName="Thead",t.a=i},510:function(e,t,a){"use strict";var n=a(5),r=a(0),o=a.n(r),l=a(3),c=a(4),s=a.n(c),i=Object(r.forwardRef)((function(e,t){var a=e.children,r=e.className,l=Object(n.a)(e,["children","className"]);return o.a.createElement("tr",Object.assign({className:s()("vds-tr",r),ref:t},l),a)}));i.propTypes={children:l.node,className:l.string},i.displayName="Tr",t.a=i},517:function(e,t){},529:function(e,t,a){"use strict";var n=a(2),r=a(5),o=a(0),l=a.n(o),c=a(3),s=a(4),i=a.n(s),d=a(133),p=Object(o.forwardRef)((function(e,t){var a,o=e.active,c=e.children,s=e.className,p=e.colorScheme,u=e.disabled,m=e.flippable,f=e.isFullWidth,v=e.role,h=e.tabIndex,b=e.tag,g=e.type,O=Object(r.a)(e,["active","children","className","colorScheme","disabled","flippable","isFullWidth","role","tabIndex","tag","type"]);return l.a.createElement(b,Object.assign({className:i()((a={},Object(n.a)(a,"".concat("vds-btn-text"),!1===Boolean(p)),Object(n.a)(a,"".concat("vds-state","--active"),Boolean(o)),Object(n.a)(a,"".concat("vds-btn-text","--").concat(p),Boolean(p)),Object(n.a)(a,"".concat("vds-state","--flippable"),Boolean(m)),Object(n.a)(a,"".concat("vds-btn-text","--fullwidth"),Boolean(f)),Object(n.a)(a,"".concat("vds-state","--disabled"),Boolean(u)),a),s),disabled:u,role:"button"===b?void 0:v,tabIndex:["span","div"].includes(b)?h:void 0,type:"button"===b?g:void 0,ref:t},O),l.a.createElement(d.a,null,c))}));p.propTypes={active:c.bool,children:c.node,className:c.string,colorScheme:Object(c.oneOf)(["primary","secondary","tertiary"]),disabled:c.bool,flippable:c.bool,isFullWidth:c.bool,role:c.string,tabIndex:Object(c.oneOfType)([c.number,c.string]),tag:Object(c.oneOf)(["a","button","div","span"]),type:c.string},p.defaultProps={role:"button",tabIndex:0,tag:"button",type:"button"},p.displayName="ButtonText",t.a=p},813:function(e,t,a){"use strict";var n=a(2),r=a(96),o=a(5),l=a(0),c=a.n(l),s=a(4),i=a.n(s),d=a(518),p=a.n(d),u=a(21),m=a(39),f=a(134),v=a(715),h=c.a.createContext({}),b=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return t.forEach((function(e){return e&&e.apply(void 0,a)}))}},g=function(){return!("undefined"===typeof window||!window.document||!window.document.createElement)},O={childList:!0,subtree:!0},y=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).observer=void 0,t.tooltipRef=c.a.createRef(),t.handleOutsideClick=function(e){if(t.tooltipRef.current&&!t.tooltipRef.current.contains(e.target)){var a=t.context.parentOutsideClickHandler,n=t.props,r=n.hideTooltip;(0,n.clearScheduled)(),r(),a&&a(e)}},t.handleOutsideRightClick=function(e){if(t.tooltipRef.current&&!t.tooltipRef.current.contains(e.target)){var a=t.context.parentOutsideRightClickHandler,n=t.props,r=n.hideTooltip;(0,n.clearScheduled)(),r(),a&&a(e)}},t.addOutsideClickHandler=function(){document.body.addEventListener("touchend",t.handleOutsideClick),document.body.addEventListener("click",t.handleOutsideClick)},t.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",t.handleOutsideClick),document.body.removeEventListener("click",t.handleOutsideClick)},t.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",t.handleOutsideRightClick)},t.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",t.handleOutsideRightClick)},t.getTooltipRef=function(e){t.tooltipRef.current=e,t.props.innerRef(e)},t.getArrowProps=function(e){return void 0===e&&(e={}),Object(u.a)({},e,{style:Object(u.a)({},e.style,t.props.arrowProps.style)})},t.getTooltipProps=function(e){void 0===e&&(e={});var a="hover"===t.props.trigger;return Object(u.a)({},e,a&&{onMouseEnter:b(t.props.clearScheduled,e.onMouseEnter),onMouseLeave:b(t.props.hideTooltip,e.onMouseLeave)},{style:Object(u.a)({},e.style,t.props.style)})},t.contextValue={isParentNoneTriggered:"none"===t.props.trigger,addParentOutsideClickHandler:t.addOutsideClickHandler,addParentOutsideRightClickHandler:t.addOutsideRightClickHandler,parentOutsideClickHandler:t.handleOutsideClick,parentOutsideRightClickHandler:t.handleOutsideRightClick,removeParentOutsideClickHandler:t.removeOutsideClickHandler,removeParentOutsideRightClickHandler:t.removeOutsideRightClickHandler},t}Object(m.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this,t=this.props.trigger;if((this.observer=new MutationObserver((function(){e.props.scheduleUpdate()}))).observe(this.tooltipRef.current,O),"none"!==t){var a=this.context,n=a.removeParentOutsideClickHandler,r=a.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),n&&n(),r&&r()}},a.componentDidUpdate=function(){this.props.closeOnOutOfBoundaries&&this.props.outOfBoundaries&&this.props.hideTooltip()},a.componentWillUnmount=function(){var e=this.props.trigger;if(this.observer&&this.observer.disconnect(),"none"!==e){var t=this.context,a=t.isParentNoneTriggered,n=t.addParentOutsideClickHandler,r=t.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!a&&n&&n(),!a&&r&&r()}},a.render=function(){var e=this.props,t=e.arrowProps,a=e.placement,n=e.tooltip;return c.a.createElement(h.Provider,{value:this.contextValue},n({arrowRef:t.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement:a,tooltipRef:this.getTooltipRef}))},t}(l.Component);y.contextType=h;var w={preventOverflow:{boundariesElement:"viewport"}},E=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={tooltipShown:t.props.defaultTooltipShown},t.hideTimeout=void 0,t.showTimeout=void 0,t.popperOffset=void 0,t.setTooltipState=function(e){var a=function(){return t.props.onVisibilityChange(e.tooltipShown)};t.isControlled()?a():t.setState(e,a)},t.clearScheduled=function(){clearTimeout(t.hideTimeout),clearTimeout(t.showTimeout)},t.showTooltip=function(e){var a=e.pageX,n=e.pageY;t.clearScheduled();var r={tooltipShown:!0};t.props.followCursor&&(r=Object(u.a)({},r,{pageX:a,pageY:n})),t.showTimeout=window.setTimeout((function(){return t.setTooltipState(r)}),t.props.delayShow)},t.hideTooltip=function(){t.clearScheduled(),t.hideTimeout=window.setTimeout((function(){return t.setTooltipState({tooltipShown:!1})}),t.props.delayHide)},t.toggleTooltip=function(e){var a=e.pageX,n=e.pageY,r=t.getState()?"hideTooltip":"showTooltip";t[r]({pageX:a,pageY:n})},t.clickToggle=function(e){e.stopPropagation(),e.preventDefault();var a=e.pageX,n=e.pageY,r=t.props.followCursor?"showTooltip":"toggleTooltip";t[r]({pageX:a,pageY:n})},t.contextMenuToggle=function(e){e.preventDefault();var a=e.pageX,n=e.pageY,r=t.props.followCursor?"showTooltip":"toggleTooltip";t[r]({pageX:a,pageY:n})},t.getTriggerProps=function(e){void 0===e&&(e={});var a=t.props,n=a.trigger,r=a.followCursor,o="click"===n,l="hover"===n,c="right-click"===n;return Object(u.a)({},e,o&&{onClick:b(t.clickToggle,e.onClick),onTouchEnd:b(t.clickToggle,e.onTouchEnd)},c&&{onContextMenu:b(t.contextMenuToggle,e.onContextMenu)},l&&{onMouseEnter:b(t.showTooltip,e.onMouseEnter),onMouseLeave:b(t.hideTooltip,e.onMouseLeave)},l&&r&&{onMouseMove:b(t.showTooltip,e.onMouseMove)})},t}Object(m.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.clearScheduled()},a.render=function(){var e=this,t=this.props,a=t.children,n=t.tooltip,r=t.placement,o=t.trigger,l=t.getTriggerRef,s=t.modifiers,i=t.closeOnOutOfBoundaries,d=t.usePortal,p=t.portalContainer,m=t.followCursor,h=t.getTooltipRef,b=c.a.createElement(v.b,{innerRef:h,placement:r,modifiers:Object(u.a)({},w,m&&{followCursorModifier:{enabled:!0,fn:function(t){return e.popperOffset=t.offsets.popper,t},order:1e3}},s)},(function(t){var a=t.ref,r=t.style,l=t.placement,s=t.arrowProps,d=t.outOfBoundaries,p=t.scheduleUpdate;if(m&&e.popperOffset){var f=e.state,v=f.pageX,h=f.pageY,b=e.popperOffset,g=b.width,O=b.height,w=v+g>window.scrollX+document.body.offsetWidth?v-g:v,E=h+O>window.scrollY+document.body.offsetHeight?h-O:h;r.transform="translate3d("+w+"px, "+E+"px, 0"}return c.a.createElement(y,Object(u.a)({arrowProps:s,closeOnOutOfBoundaries:i,outOfBoundaries:d,placement:l,scheduleUpdate:p,style:r,tooltip:n,trigger:o},{clearScheduled:e.clearScheduled,hideTooltip:e.hideTooltip,innerRef:a}))}));return c.a.createElement(v.a,null,c.a.createElement(v.c,{innerRef:l},(function(t){var n=t.ref;return a({getTriggerProps:e.getTriggerProps,triggerRef:n})})),this.getState()&&(d?Object(f.createPortal)(b,p):b))},a.isControlled=function(){return void 0!==this.props.tooltipShown},a.getState=function(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},t}(l.Component);E.defaultProps={closeOnOutOfBoundaries:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:function(){},placement:"right",portalContainer:g()?document.body:null,trigger:"hover",usePortal:g()};var j=E;function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var k=function(e){var t=e.className,a=e.tooltip,s=e.children,d=e.id,u=void 0===d?p.a.generate():d,m=e.trigger,f=Object(o.a)(e,["className","tooltip","children","id","trigger"]),v=Object(l.useState)(u),h=Object(r.a)(v,1)[0];return c.a.createElement(j,Object.assign({trigger:m},f,{modifiers:{offset:{enabled:!0,offset:"0, 4px"}},tooltip:function(e){var n=e.getTooltipProps,r=e.tooltipRef;return c.a.createElement("div",n({className:i()("vds-tooltip","".concat("vds-state","--show"),t),ref:r}),c.a.createElement("div",{className:"".concat("vds-tooltip","-content")},c.a.createElement("span",{className:"".concat("vds-tooltip","-text")},a),c.a.createElement("span",{className:"".concat("vds-tooltip","-pointer")})))}}),(function(e){var t=e.getTriggerProps,r=e.triggerRef;return c.a.createElement(l.Fragment,null,Object(l.cloneElement)(s,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t({"aria-controls":h,"aria-describedby":h,ref:r}))),c.a.createElement("span",{"aria-hidden":"true",id:h,style:{display:"none"}},a))}))};k.displayName="Tooltip";t.a=k}}]);
//# sourceMappingURL=39.d453492f.chunk.js.map