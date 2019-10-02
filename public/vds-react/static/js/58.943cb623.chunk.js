(window["webpackJsonp@visa/vds-react"]=window["webpackJsonp@visa/vds-react"]||[]).push([[58],{269:function(e,a,n){"use strict";n.r(a);var t=n(96),r=n(513),s=n(0),l=n.n(s),o=n(4),c=n.n(o),i=n(516),m=n(514),d=n.n(m),u=n(37),p=n(8),g=n(504),E=n(16),v=n(23),f=n(17),y=n(505),h=n(60),b=n(132),S=n(506),C=n(507),N=n(508),w=n(509),O=n(510),P=n(7),R=n(221),j=function(){return l.a.createElement(v.a,null,l.a.createElement(f.a,null,l.a.createElement(p.a,null,l.a.createElement(P.a,{tag:"h2"},"Linear Progress Indeterminate (default)"))),l.a.createElement(f.a,null,l.a.createElement(p.a,null,l.a.createElement(R.a,null))),l.a.createElement(f.a,null,l.a.createElement(p.a,null,l.a.createElement(P.a,{tag:"h2"},"Linear Progress Determinate"))),l.a.createElement(f.a,null,l.a.createElement(p.a,null,l.a.createElement(R.a,{determinate:!0,value:73}))),l.a.createElement(f.a,null,l.a.createElement(p.a,null,l.a.createElement(P.a,{tag:"h2"},"Circular Progress Indeterminate (default)"))),l.a.createElement(f.a,null,l.a.createElement(p.a,null,l.a.createElement(R.a,{type:"spinner"}))),l.a.createElement(f.a,null,l.a.createElement(p.a,null,l.a.createElement(P.a,{tag:"h2"},"Circular Progress Determinate"))),l.a.createElement(f.a,null,l.a.createElement(p.a,null,l.a.createElement(R.a,{determinate:!0,type:"spinner",value:72}))),l.a.createElement(f.a,null,l.a.createElement(p.a,null,l.a.createElement(P.a,{tag:"h2"},"Circular Progress Indeterminate (default small)"))),l.a.createElement(f.a,null,l.a.createElement(p.a,null,l.a.createElement(R.a,{type:"spinner",size:"small"}))),l.a.createElement(f.a,null,l.a.createElement(p.a,null,l.a.createElement(P.a,{tag:"h2"},"Circular Progress Determinate (small)"))),l.a.createElement(f.a,null,l.a.createElement(p.a,null,l.a.createElement(R.a,{determinate:!0,type:"spinner",size:"small",value:72}))))},T=n(515),k="import React from 'react';\nimport { bool, func, node, number, oneOf, oneOfType, string } from 'prop-types';\nimport classnames from 'classnames';\nimport Grid from '../grid';\nimport Row from '../row';\nimport Col from '../col';\n\nconst CSS_PREFIX = 'vds-progress';\nconst CSS_STATE = 'vds-state';\nconst SIZES = {\n  large: {\n    cx: 36,\n    cy: 36,\n    r: 32,\n    strokeDasharray: 201.062,\n    strokeDashoffset: 56.2973,\n    width: 72\n  },\n  small: {\n    cx: 24,\n    cy: 24,\n    r: 20,\n    strokeDasharray: 125.664,\n    strokeDashoffset: 35.1858,\n    width: 48\n  }\n};\n\nconst Progress = ({\n  annotation,\n  ariaLabel,\n  ariaLabelDeterminateText,\n  className,\n  determinate,\n  linearBorderStyle,\n  max,\n  min,\n  size,\n  type,\n  value,\n  ...remainingProps\n}) => {\n  if (type === 'linear') {\n    return (\n      <div\n        className={classnames(CSS_PREFIX, {\n          [`${CSS_STATE}--determinate`]: Boolean(determinate),\n          [`${CSS_PREFIX}--${linearBorderStyle}`]: Boolean(linearBorderStyle)\n        }, className)}\n        {...remainingProps}\n      >\n        <div className={classnames(`${CSS_PREFIX}-background`)} />\n        <div\n          aria-label={`${ariaLabel}${determinate ? ariaLabelDeterminateText(value) : ''}`}\n          aria-valuemax={determinate ? `${max}` : undefined}\n          aria-valuemin={determinate ? `${min}` : undefined}\n          aria-valuenow={determinate ? value : undefined}\n          className={classnames(`${CSS_PREFIX}-bar`)}\n          role=\"progressbar\"\n          style={{\n            width: determinate ? `${((value / max) * 100).toFixed(2)}%` : undefined\n          }}\n        />\n        {\n          determinate\n            ? annotation({ containerClassName: `${CSS_PREFIX}-label`, max, value })\n            : undefined\n        }\n      </div>\n    );\n  }\n\n  return (\n    <div\n      className={classnames(`${CSS_PREFIX}--spinner`, {\n        [`${CSS_STATE}--determinate`]: Boolean(determinate),\n        [`${CSS_STATE}--small`]: size === 'small'\n      }, className)}\n      {...remainingProps}\n    >\n      <svg className={`${CSS_PREFIX}--spinner-track`} height={SIZES[size].width} width={SIZES[size].width}>\n        <circle\n          className={`${CSS_PREFIX}--spinner-background`}\n          cx={SIZES[size].cx}\n          cy={SIZES[size].cy}\n          r={SIZES[size].r}\n          style={{\n            strokeDasharray: `${SIZES[size].strokeDasharray}, ${SIZES[size].strokeDasharray}`,\n            strokeDashoffset: `${SIZES[size].strokeDashoffset}`\n          }}\n        />\n        <circle\n          className={`${CSS_PREFIX}--spinner-bar`}\n          cx={SIZES[size].cx}\n          cy={SIZES[size].cy}\n          r={SIZES[size].r}\n          style={{\n            strokeDasharray: `${SIZES[size].strokeDasharray}, ${SIZES[size].strokeDasharray}`,\n            strokeDashoffset:\n              type === 'determinate'\n                ? SIZES[size].strokeDasharray - SIZES[size].strokeDasharray / (100 / value)\n                : SIZES[size].strokeDashoffset\n          }}\n        />\n      </svg>\n      <div className=\"vds-progress-label\">{`${value}%`}</div>\n    </div>\n  );\n};\n\nProgress.propTypes = {\n  /**\n   * Annotation\n   */\n  annotation: func,\n\n  /**\n   * Label\n   */\n  ariaLabel: string,\n\n  /**\n   * Aria label loaded text\n   */\n  ariaLabelDeterminateText: func,\n\n  /**\n  * @ignore\n  */\n  children: oneOfType([\n    func,\n    node\n  ]),\n\n  /**\n   * @ignore\n   */\n  className: string,\n\n  /**\n   * Determinate\n   */\n  determinate: bool,\n\n  /**\n   * Linear border style\n   */\n  linearBorderStyle: oneOf(['rounded']),\n\n  /**\n   * Value max\n   */\n  max: number,\n\n  /**\n   * Value min\n   */\n  min: number,\n\n  /**\n   * Size\n   */\n  size: oneOf(['large', 'small']),\n\n  /**\n   * Type\n   */\n  type: oneOf(['spinner', 'linear']),\n\n  /**\n   * Value\n   */\n  value: number\n};\n\nProgress.defaultProps = {\n  annotation: ({ containerClassName, max, value }) => ( // eslint-disable-line\n    <Grid className={classnames(containerClassName)} type=\"fluid\">\n      <Row>\n        <Col>\n          {`${value} / ${max}`}\n        </Col>\n        <Col textAlign=\"right\">\n          {`${value}%`}\n        </Col>\n      </Row>\n    </Grid>),\n  ariaLabel: 'Progress bar',\n  ariaLabelDeterminateText: value => `, ${value} loaded`,\n  max: 100,\n  min: 0,\n  size: 'large',\n  type: 'linear',\n  value: 0\n};\n\nProgress.displayName = 'Progress';\n\nexport default Progress;\n".replace("= memo(({","= React.forwardRef(({").replace("cloneElement(","React.cloneElement("),x='import React from \'react\';\nimport Col from \'../../col\';\nimport Grid from \'../../grid\';\nimport Progress from \'../../progress\';\nimport Row from \'../../row\';\nimport Typography from \'../../typography\';\n\nconst ProgressExample = () => (\n  <Grid>\n    <Row>\n      <Col>\n        <Typography tag="h2">Linear Progress Indeterminate (default)</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Progress />\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Linear Progress Determinate</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Progress determinate value={73} />\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Circular Progress Indeterminate (default)</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Progress type="spinner" />\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Circular Progress Determinate</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Progress determinate type="spinner" value={72} />\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Circular Progress Indeterminate (default small)</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Progress type="spinner" size="small" />\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag="h2">Circular Progress Determinate (small)</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Progress determinate type="spinner" size="small" value={72} />\n      </Col>\n    </Row>\n  </Grid>\n);\n\nexport default ProgressExample;\n'.replace(/'..\/..\//g,"'@visa/vds-react/"),I=function(e){var a=Object(r.a)({},e),n=Object(s.useState)({}),o=Object(t.a)(n,2),m=o[0],R=o[1];return Object(s.useEffect)((function(){try{R(T.parse(k))}catch(e){console.log("\n        React-docgen could not parse props for Progress\n        check for fix here https://github.com/reactjs/react-docgen/issues/342")}}),[]),l.a.createElement(v.a,{siblingOfStickyFooter:!0},l.a.createElement(f.a,null,l.a.createElement(p.a,null,l.a.createElement(P.a,{tag:"h1"},"Progress"))),l.a.createElement(f.a,null,l.a.createElement(p.a,null,l.a.createElement(b.a,null,l.a.createElement(h.a,{tag:l.a.createElement(u.c,{exact:!0,to:"".concat("/vds-react","/components/progress"),activeClassName:"vds-state--selected"})},l.a.createElement(E.a,{name:"log",resolution:"low"}),"Progress Example"),l.a.createElement(h.a,{tag:l.a.createElement(u.c,{exact:!0,to:"".concat("/vds-react","/components/progress/code"),activeClassName:"vds-state--selected"})},l.a.createElement(E.a,{name:"code-fork-code-alt",resolution:"low"}),"Code for Progress Example")))),l.a.createElement(f.a,null,l.a.createElement(p.a,null,l.a.createElement("div",{className:c()({"vds-state--hidden":a.match.path==="".concat("/vds-react","/components/progress/code"),"vds-state--show":a.match.path!=="".concat("/vds-react","/components/progress/code")})},l.a.createElement(j,a)),l.a.createElement("div",{className:c()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/progress/code"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/progress/code")})},l.a.createElement(i.a,Object.assign({},i.b,{theme:d.a,code:x,language:"jsx"}),(function(e){var a=e.className,n=e.style,t=e.tokens,r=e.getLineProps,s=e.getTokenProps;return l.a.createElement("pre",{className:a,style:n},t.map((function(e,a){return l.a.createElement("div",r({key:a,line:e}),l.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return l.a.createElement("span",s({key:a,token:e}))})))})))}))))),l.a.createElement(f.a,null,l.a.createElement(p.a,null,l.a.createElement(g.a,{className:c()(["components"]),dividerLines:!0,size:"compact"},l.a.createElement(y.a,{tag:"caption"},"Props"),l.a.createElement(w.a,null,l.a.createElement(O.a,{className:"vds-tr"},l.a.createElement(N.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Prop"),l.a.createElement(N.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Type"),l.a.createElement(N.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Default"),l.a.createElement(N.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Description"))),l.a.createElement(S.a,null,m.props&&Object.entries(m.props).filter((function(e){return"@ignore"!==e[1].description})).map((function(e,a){return l.a.createElement(O.a,{className:"vds-tr",key:a,tabIndex:"0"},l.a.createElement(C.a,{className:"vds-td"},e[0]," ",e[1].required?l.a.createElement("sup",{style:{color:"red"}}," required"):""),l.a.createElement(C.a,{className:"vds-td"},l.a.createElement("strong",null,e[1].type.name),e[1].type.value&&e[1].type.value.length?l.a.createElement("small",{style:{color:"#1a1f71"}},l.a.createElement("br",null),e[1].type.value.length?e[1].type.value.map((function(e){return e.value||e.name})).join(", "):void 0):""),l.a.createElement(C.a,{className:"vds-td"},e[1].defaultValue?e[1].defaultValue.value:""),l.a.createElement(C.a,{className:"vds-td"},e[1].description))})))))))};I.displayName="ProgressExample";a.default=I},504:function(e,a,n){"use strict";var t=n(2),r=n(5),s=n(0),l=n.n(s),o=n(3),c=n(4),i=n.n(c),m=Object(s.forwardRef)((function(e,a){var n,s=e.children,o=e.className,c=e.customizableColumns,m=e.dividerLines,d=e.keyValuePairs,u=e.reveal,p=e.revealFirstColumn,g=e.revealLastColumn,E=e.rowSelection,v=e.size,f=e.stickyHeader,y=Object(r.a)(e,["children","className","customizableColumns","dividerLines","keyValuePairs","reveal","revealFirstColumn","revealLastColumn","rowSelection","size","stickyHeader"]);return l.a.createElement("table",Object.assign({},y,{className:i()("vds-data-table",(n={},Object(t.a)(n,"".concat("vds-state","--customizable-columns"),Boolean(c)),Object(t.a)(n,"".concat("vds-state","--divider-lines"),Boolean(m)),Object(t.a)(n,"".concat("vds-state","--key-value-pairs"),Boolean(d)),Object(t.a)(n,"".concat("vds-state","--").concat(v),Boolean(v)),Object(t.a)(n,"".concat("vds-state","--reveal"),Boolean(u)),Object(t.a)(n,"".concat("vds-state","--reveal-first-column"),Boolean(p)),Object(t.a)(n,"".concat("vds-state","--reveal-last-column"),Boolean(g)),Object(t.a)(n,"".concat("vds-state","--").concat(E),Boolean(E)),Object(t.a)(n,"".concat("vds-state","--sticky-header"),Boolean(f)),n),o),ref:a}),s)}));m.propTypes={children:o.node,className:o.string,columns:Object(o.arrayOf)(Object(o.shape)({})),customizableColumns:o.bool,data:Object(o.arrayOf)(Object(o.shape)({})),dividerLines:o.bool,keyValuePairs:o.bool,reveal:o.bool,revealFirstColumn:o.bool,revealLastColumn:o.bool,rowSelection:Object(o.oneOf)(["multi-select","single-select"]),size:Object(o.oneOf)(["compact"]),stickyHeader:o.bool},m.displayName="DataTable",a.a=m},505:function(e,a,n){"use strict";var t=n(5),r=n(0),s=n.n(r),l=n(3),o=n(4),c=n.n(o),i=Object(r.forwardRef)((function(e,a){var n=e.children,r=e.className,l=e.tag,o=Object(t.a)(e,["children","className","tag"]);return s.a.createElement(l,Object.assign({className:c()("vds-sr",r),ref:a},o),n)}));i.propTypes={children:l.node,className:l.string,tag:l.elementType},i.defaultProps={tag:"span"},i.displayName="Sr",a.a=i},506:function(e,a,n){"use strict";var t=n(5),r=n(0),s=n.n(r),l=n(3),o=n(4),c=n.n(o),i=Object(r.forwardRef)((function(e,a){var n=e.children,r=e.className,l=Object(t.a)(e,["children","className"]);return s.a.createElement("tbody",Object.assign({className:c()("vds-tbody",r),ref:a},l),n)}));i.propTypes={children:l.node,className:l.string},i.displayName="Tbody",a.a=i},507:function(e,a,n){"use strict";var t=n(2),r=n(5),s=n(0),l=n.n(s),o=n(3),c=n(4),i=n.n(c),m=Object(s.forwardRef)((function(e,a){var n=e.children,s=e.className,o=e.textAlign,c=Object(r.a)(e,["children","className","textAlign"]);return l.a.createElement("td",Object.assign({className:i()("vds-td",Object(t.a)({},"vds-text--".concat(o),Boolean(o)),s),ref:a},c),n)}));m.propTypes={children:o.node,className:o.string,textAlign:Object(o.oneOf)(["center","left","right"])},m.displayName="Td",a.a=m},508:function(e,a,n){"use strict";var t=n(5),r=n(0),s=n.n(r),l=n(3),o=n(4),c=n.n(o),i=Object(r.forwardRef)((function(e,a){var n=e.children,r=e.className,l=Object(t.a)(e,["children","className"]);return s.a.createElement("th",Object.assign({className:c()("vds-th",r),ref:a},l),n)}));i.propTypes={children:l.node,className:l.string},i.displayName="Th",a.a=i},509:function(e,a,n){"use strict";var t=n(5),r=n(0),s=n.n(r),l=n(3),o=n(4),c=n.n(o),i=Object(r.forwardRef)((function(e,a){var n=e.children,r=e.className,l=Object(t.a)(e,["children","className"]);return s.a.createElement("thead",Object.assign({className:c()("vds-thead",r),ref:a},l),n)}));i.propTypes={children:l.node,className:l.string},i.displayName="Thead",a.a=i},510:function(e,a,n){"use strict";var t=n(5),r=n(0),s=n.n(r),l=n(3),o=n(4),c=n.n(o),i=Object(r.forwardRef)((function(e,a){var n=e.children,r=e.className,l=Object(t.a)(e,["children","className"]);return s.a.createElement("tr",Object.assign({className:c()("vds-tr",r),ref:a},l),n)}));i.propTypes={children:l.node,className:l.string},i.displayName="Tr",a.a=i},517:function(e,a){}}]);
//# sourceMappingURL=58.943cb623.chunk.js.map