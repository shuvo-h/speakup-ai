import React from 'react';

export function IconRightMark ({width=20, height=20,bgColor="#00b569",inColor="#fff"}) {
    return <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={width} height={height} viewBox="0 0 16 16" style={{fill:"#000000"}}><path fill={bgColor} d="M8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s8-3.582,8-8S12.418,0,8,0z"></path><polygon fill={inColor} points="7,12 3.48,8.48 4.894,7.066 7,9.172 11.71,4.462 13.124,5.876"></polygon></svg>
};

export const PlusIcon = ({width=20, height=20,bgColor="#00b569",inColor="#fff"}) => <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  width={width} height={height}  viewBox="0 0 50 50" style={{enableBackground:"new 0 0 50 50"}} xmlSpace="preserve"><circle style={{fill:bgColor}} cx="25" cy="25" r="25"/> <line style={{fill:"none",stroke:inColor,strokeWidth:2,strokeLinecap:'round',strokeLinejoin:'round', strokeMiterlimit:10}} x1="25" y1="13" x2="25" y2="38"/><line style={{fill:"none",stroke:inColor,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10}} x1="37.5" y1="25" x2="12.5" y2="25"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>

export const MinusIcon = ({width=20, height=20,bgColor="#00b569",inColor="#fff"}) => <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width={width} height={height}	viewBox="0 0 50 50" style={{enableBackground:'new 0 0 50 50'}} xmlSpace="preserve"><circle style={{fill:bgColor}} cx="25" cy="25" r="25"/><line style={{fill:"none",stroke:inColor,strokeWidth:2,strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:10}} x1="38" y1="25" x2="12" y2="25"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>

export const MasterCardIcon = ({width=20, height=20,bgColor="#3F51B5",inColor1="#FF3D00",inColor2="#FFC107"}) => <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={width} height={height} viewBox="0 0 48 48" style={{ fill:'#000000',}}><path fill={bgColor} d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"></path><path fill={inColor2} d="M30 14A10 10 0 1 0 30 34A10 10 0 1 0 30 14Z"></path><path fill={inColor1} d="M22.014,30c-0.464-0.617-0.863-1.284-1.176-2h5.325c0.278-0.636,0.496-1.304,0.637-2h-6.598C20.07,25.354,20,24.686,20,24h7c0-0.686-0.07-1.354-0.201-2h-6.598c0.142-0.696,0.359-1.364,0.637-2h5.325c-0.313-0.716-0.711-1.383-1.176-2h-2.973c0.437-0.58,0.93-1.122,1.481-1.595C21.747,14.909,19.481,14,17,14c-5.523,0-10,4.477-10,10s4.477,10,10,10c3.269,0,6.162-1.575,7.986-4H22.014z"></path></svg>

export const UnionCardIcon = ({width=20, height=20}) => <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={width} height={height} viewBox="0 0 48 48" style={{fill:"#000000"}}><path fill="#e21836" d="M10.09,9h11.585c1.617,0,2.623,1.362,2.246,3.039l-5.394,23.927c-0.381,1.671-2,3.034-3.618,3.034 H3.325C1.956,38.999,1.023,38.02,1,36.704c-0.004-0.237,0.021-0.484,0.079-0.739l5.396-23.927C6.852,10.362,8.471,9,10.09,9"></path><path fill="#00447c" d="M20.5,9h13.47c1.657,0,0.91,1.362,0.52,3.039l-5.527,23.928C28.575,37.637,28.696,39,27.035,39H13.38 c-1.39,0-2.336-0.955-2.379-2.246c-0.008-0.251,0.018-0.516,0.081-0.788l5.711-23.928C17.187,10.362,18.657,9,20.316,9"></path><path fill="#007b84" d="M33.273,9h11.401c1.183,0,2.039,0.727,2.266,1.773c0.044,0.204,0.064,0.42,0.059,0.645 c-0.005,0.2-0.031,0.408-0.079,0.62l-5.393,23.928C41.146,37.637,39.525,39,37.906,39h-11.58c-1.355,0-2.279-0.953-2.324-2.241 c-0.009-0.253,0.016-0.518,0.078-0.792l5.578-23.928C30.036,10.362,31.653,9,33.273,9z"></path><path fill="#fefefe" d="M19.364 18.117c-.325-.195-.905-.134-1.302.135-.396.263-.45.636-.126.833.319.189.902.134 1.296-.137C19.626 18.68 19.685 18.31 19.364 18.117zM42.308 19.376l-1.171 2.048L40.874 19l-1.24.294.454 3.963-1.415 2.293c-.038.054-.072.091-.119.107-.052.025-.118.03-.21.03h-.04L38 26.624l.75.001c.53-.002.904-.288 1.092-.625L44 19 42.308 19.376zM22.157 25l-.404.701C21.666 25.854 21.518 26 21.19 26h-.201l-.282.875h.668c.787 0 1.158-.431 1.158-.431h2.086l.301-.933h-1.752l.28-.51L22.157 25zM10.416 19.885c-.194.75-.341 1.24-.679 1.585-.233.238-.593.351-.923.35-.493 0-.91-.311-.883-.823.002-.038.007-.078.014-.119C8.187 19.531 9.242 16 9.242 16H7.275l-1.02 4.03c0 0-.25.968-.255 1.379-.004.313.047.569.164.785C6.54 22.879 7.652 23 8.288 23c1.088 0 1.731-.104 2.257-.424.839-.51 1.082-1.2 1.341-2.175C12.178 19.305 13 16 13 16h-1.595C11.405 16 10.417 19.883 10.416 19.885zM13.701 23l.705-2.869C14.559 20.065 14.709 20 14.851 20c.338 0 .414.281.397.393C15.234 20.529 14.658 23 14.658 23h1.404l.491-2.068c.204-.764.307-1.152.177-1.468C16.594 19.111 16.246 19 15.924 19c-.21 0-.596.073-.946.234-.127.061-.247.132-.374.202l.103-.438-1.493.234L12.25 23H13.701zM25.576 23l.705-2.869C26.434 20.065 26.584 20 26.726 20c.338 0 .414.281.397.393C27.109 20.529 26.533 23 26.533 23h1.404l.491-2.068c.204-.764.307-1.152.177-1.468C28.469 19.111 28.121 19 27.799 19c-.21 0-.596.073-.946.234-.127.061-.247.132-.374.202l.103-.438-1.493.234L24.125 23H25.576zM17 23L18.451 23 19.201 20 17.715 20.22zM35.424 16.62c-.414-.603-1.269-.615-2.257-.62-.001 0-.727 0-.727 0h-1.614L29 23h1.579l.665-2.5h.294c1.007 0 1.972-.014 2.809-.618.585-.426 1.033-.992 1.228-1.757.05-.187.09-.41.096-.633C35.678 17.199 35.588 16.847 35.424 16.62zM33.742 18.19c-.115.467-.428.86-.822 1.049-.324.16-.721.137-1.125.136h-.252L32.175 17c.142 0 .38 0 .62 0 .75 0 .988.477.986.875C33.781 17.978 33.768 18.084 33.742 18.19zM28.47 29c0 0-.075.219-.099.293-.02.063-.1.207-.327.207h-.419V29H26.5v2.5c-.007.183.179.5.998.5h.932l.286-.876-.84.001c-.25 0-.245-.116-.248-.3-.003-.2-.003-.575-.003-.575h.794c.73 0 .89-.606.946-.787L29.474 29H28.47z"></path><path fill="#fefefe" d="M28.824 25c-1.502 0-1.795.67-1.795.67L27.235 25h-1.21l-1.979 6.083c-.021.07-.048.18-.046.299C24.006 31.664 24.174 32 24.964 32l.718-.001L26.002 31c0 0-.36 0-.485 0-.157 0-.125-.13-.125-.13l.709-2.152h1.778c1.47 0 1.743-.9 1.875-1.31L30.538 25C30.538 25 29.369 25 28.824 25zM28.298 28h-2.001l.206-.604h2.005L28.298 28zM28.822 26.518c0 0-1.012-.01-1.175.02-.717.124-1.018.508-1.018.508L26.967 26h2.023L28.822 26.518zM37.507 19.234c0 0-.01.04-.028.111C37.325 19.179 37.07 19 36.668 19c-.5 0-.937.179-1.45.617-.451.39-.677.926-.811 1.439-.052.19-.083.491-.083.694 0 1.25 1.082 1.25 1.345 1.25.395 0 .71-.151.965-.347C36.602 22.776 36.543 23 36.543 23h1.451L39 19 37.507 19.234zM36.098 22.116c-.063 0-.438 0-.429-.411.004-.203.052-.43.125-.691.17-.608.399-1.139 1-1.139.47 0 .461.377.26 1.133-.058.217-.221.609-.348.8C36.521 22.086 36.31 22.116 36.098 22.116zM23.768 19.493C23.471 19.12 22.93 19.001 22.366 19c-.339 0-1.149.031-1.796.579-.465.396-.69.934-.831 1.449-.142.525-.316 1.471.596 1.824C20.616 22.968 21.025 23 21.29 23c.675.001 1.372-.174 1.908-.695.413-.422.614-1.051.685-1.31C24.114 20.138 23.964 19.737 23.768 19.493zM21.429 22.115c-.063 0-.438 0-.429-.411.004-.203.06-.471.125-.691.169-.572.4-1.139 1-1.139.47 0 .461.377.26 1.133-.058.217-.221.609-.348.8C21.852 22.086 21.641 22.116 21.429 22.115zM20.847 27.115L20.556 28h.846l-.248.769h-.848L20 29.706h.845l-.536 1.639c-.072.217-.075.654.738.654h1.627L23 31c0 0-.931 0-1.181 0s-.183-.177-.183-.177l.368-1.132h1.746l.302-.921h-1.747L22.56 28h1.713l.297-.885H20.847zM39.7 27.916L40 27h-4.037l-.294.916h1.211l-.247.743h-1.232l-.263.812h1.082l-.963 1.265C35.18 30.847 35.017 31 34.749 31h-.486l.095-.289H33.94L35.479 26h.547l.172-.518c0 0 0 .381 0 .517 0 .434.125.626.821.626h.478L37.8 25.69h-.223c-.147.003-.217-.044-.205-.138V25c0 0-.799 0-1.25 0-1.175 0-1.903.055-2.193.132-.351.09-.807.357-.807.357L33.279 25H31.98l-1.862 5.722h-.28L29.52 31.69h2.874L32.293 32h1.229l.1-.31h.402L33.919 32h1.02c.259 0 .468-.058.642-.155.182-.101.325-.244.447-.407l.756-1.006.115 1.055C36.928 31.679 37.002 32 37.791 32h.568l.329-1h-.371c-.265 0-.322-.195-.337-.297l-.132-1.024h-.615l.25-.208h1.703l.268-.812h-1.585l.251-.743C38.12 27.916 39.7 27.916 39.7 27.916zM32.964 26h1.303l-.278.853c0 0-.462.028-.693.08-.393.09-.72.248-.72.248L32.964 26zM32.729 30.722h-1.306l.347-1.064h1.303L32.729 30.722zM33.408 28.622c0 0-.346.043-.574.095C32.435 28.832 31.979 29 31.979 29l.4-1.218h1.308L33.408 28.622z"></path></svg>



export const AmericanExpressCardIcon = ({width=20, height=20,bgColor="#3F51B5",inColor1="#FF3D00",inColor2="#FFC107"}) => <svg width={width} height={height} version="1.1" viewBox="0 0 160 100"  xmlns="http://www.w3.org/2000/svg" sketch="http://www.bohemiancoding.com/sketch/ns" xlink="http://www.w3.org/1999/xlink"><title/><defs/>
<g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"><g id="american-express" transform="translate(-1.000000, 0.000000)"><path d="M149,1.01146687e-06 C141,1.76644588e-06 56.3007812,-1.60318373e-06 9,1.01146687e-06 C5,1.23257532e-06 1,4.00000101 1,8.00000101 L1,88.000001 C0.999999537,96.000001 5,100.000001 13,100.000001 C57.6232096,100.000001 141,100.000002 149,100.000001 C157,100.000001 161,96.000001 161,88.000001 L161,12.000001 C161,4.00000101 157,1.01146687e-06 149,1.01146687e-06 Z M149,1.01146687e-06" fill="#306FC5" id="Rectangle-1"/>
<path d="M14.5198284,36.625336 L11.4210462,29.0743396 L8.33997461,36.625336 L14.5198284,36.625336 Z M82.7855885,33.6185346 C82.1634325,33.9961701 81.427586,34.0087389 80.5460556,34.0087389 L75.04606,34.0087389 L75.04606,29.8016165 L80.6208972,29.8016165 C81.4098754,29.8016165 82.2331323,29.8370377 82.7678779,30.1432595 C83.3551839,30.419202 83.7185367,31.006508 83.7185367,31.8177674 C83.7185367,32.6455947 83.3728945,33.3117414 82.7855885,33.6185346 C82.7855885,33.6185346 83.3728945,33.3117414 82.7855885,33.6185346 L82.7855885,33.6185346 L82.7855885,33.6185346 Z M122.021975,36.625336 L118.888915,29.0743396 L115.772993,36.625336 L122.021975,36.625336 L122.021975,36.625336 L122.021975,36.625336 L122.021975,36.625336 Z M48.8829461,44.7984882 L44.2416286,44.7984882 L44.2244893,29.9638684 L37.659573,44.7984882 L33.6844022,44.7984882 L27.1023466,29.9507282 L27.1023466,44.7984882 L17.8939817,44.7984882 L16.1543446,40.5736552 L6.72773948,40.5736552 L4.97039177,44.7984882 L0.0531317741,44.7984882 L8.16058346,25.8572964 L14.8871803,25.8572964 L22.5872884,43.7906984 L22.5872884,25.8572964 L29.9766042,25.8572964 L35.9016539,38.7066161 L41.3445186,25.8572964 L48.8823748,25.8572964 L48.8823748,44.7984882 L48.8823748,44.7984882 L48.8829461,44.7984882 L48.8829461,44.7984882 Z M67.3813731,44.7984882 L52.2570994,44.7984882 L52.2570994,25.8572964 L67.3813731,25.8572964 L67.3813731,29.8016165 L56.7847264,29.8016165 L56.7847264,33.2157615 L67.1271405,33.2157615 L67.1271405,37.0983801 L56.7847264,37.0983801 L56.7847264,40.8810197 L67.3813731,40.8810197 L67.3813731,44.7984882 L67.3813731,44.7984882 L67.3813731,44.7984882 L67.3813731,44.7984882 Z M88.7060678,30.958518 C88.7060678,33.9784595 86.6904882,35.5387055 85.5158761,36.0071792 C86.5065266,36.3842434 87.3526358,37.0503901 87.7554089,37.602275 C88.3947041,38.5443642 88.5049669,39.385903 88.5049669,41.0775501 L88.5049669,44.7984882 L83.9384908,44.7984882 L83.9213516,42.4098436 C83.9213516,41.2700814 84.0304716,39.6309947 83.2066435,38.7197562 C82.5450672,38.0536095 81.5367061,37.9090682 79.9067604,37.9090682 L75.0466313,37.9090682 L75.0466313,44.7984882 L70.5195757,44.7984882 L70.5195757,25.8572964 L80.9328321,25.8572964 C83.2466352,25.8572964 84.9514224,25.9184265 86.4151171,26.7645357 C87.8473897,27.6106449 88.7060678,28.8458159 88.7060678,30.958518 C88.7060678,30.958518 88.7060678,28.8458159 88.7060678,30.958518 L88.7060678,30.958518 L88.7060678,30.958518 Z M95.9514136,44.7984882 L91.3318058,44.7984882 L91.3318058,25.8572964 L95.9514136,25.8572964 L95.9514136,44.7984882 L95.9514136,44.7984882 L95.9514136,44.7984882 L95.9514136,44.7984882 Z M149.544806,44.7984882 L143.129001,44.7984882 L134.547363,30.5820251 L134.547363,44.7984882 L125.327,44.7984882 L123.565082,40.5736552 L114.160187,40.5736552 L112.450829,44.7984882 L107.153077,44.7984882 C104.952393,44.7984882 102.166117,44.3117326 100.588161,42.7034967 C98.997064,41.0952607 98.1692367,38.916858 98.1692367,35.4724336 C98.1692367,32.6633053 98.6639906,30.0952695 100.60987,28.0659785 C102.073565,26.5542939 104.365658,25.8572964 107.485579,25.8572964 L111.868665,25.8572964 L111.868665,29.9158784 L107.57756,29.9158784 C105.925333,29.9158784 104.992385,30.1615414 104.093715,31.03793 C103.321876,31.835478 102.792272,33.3431635 102.792272,35.3284636 C102.792272,37.3577546 103.195617,38.820878 104.037155,39.7766786 C104.734153,40.5262365 106.000746,40.7536177 107.192497,40.7536177 L109.225787,40.7536177 L115.606742,25.8578677 L122.39047,25.8578677 L130.055728,43.7735592 L130.055728,25.8578677 L136.949147,25.8578677 L144.907487,39.0494017 L144.907487,25.8578677 L149.544806,25.8578677 L149.544806,44.7984882 L149.544806,44.7984882 L149.544806,44.7984882 L149.544806,44.7984882 Z M0.000571309399,48.518855 L7.73610057,48.518855 L9.48030817,44.3117326 L13.3852079,44.3117326 L15.124845,48.518855 L30.3450987,48.518855 L30.3450987,45.3023831 L31.7036725,48.5325664 L39.6048815,48.5325664 L40.9634552,45.2543931 L40.9634552,48.518855 L78.7887079,48.518855 L78.7709973,41.612867 L79.5028447,41.612867 C80.0153092,41.6305776 80.1649923,41.6779963 80.1649923,42.5241055 L80.1649923,48.518855 L99.72834,48.518855 L99.72834,46.9111904 C101.306297,47.7567283 103.760642,48.518855 106.990254,48.518855 L115.220537,48.518855 L116.981884,44.3117326 L120.886784,44.3117326 L122.609281,48.518855 L138.469402,48.518855 L138.469402,44.5225458 L140.871186,48.518855 L153.580535,48.518855 L153.580535,22.1015084 L141.002588,22.1015084 L141.002588,25.221429 L139.241241,22.1015084 L126.33479,22.1015084 L126.33479,25.221429 L124.717413,22.1015084 L107.283907,22.1015084 C104.365658,22.1015084 101.800479,22.508852 99.72834,23.6440438 L99.72834,22.1015084 L87.6977067,22.1015084 L87.6977067,23.6440438 C86.3791246,22.4740021 84.5823565,22.1015084 82.5844876,22.1015084 L38.6319416,22.1015084 L35.6828424,28.9246566 L32.6543313,22.1015084 L18.810362,22.1015084 L18.810362,25.221429 L17.2895363,22.1015084 L5.4828563,22.1015084 L0,34.6617456 L0,48.518855 L0.000571309399,48.518855 Z M161.039551,62.4668027 L152.788129,62.4668027 C151.964301,62.4668027 151.416987,62.4976534 150.95594,62.809017 C150.478325,63.1158102 150.294364,63.5711438 150.294364,64.1721612 C150.294364,64.8868693 150.697708,65.3730536 151.284443,65.5832955 C151.762057,65.7495465 152.275093,65.7981078 153.029222,65.7981078 L155.482996,65.8638084 C157.959051,65.9249385 159.611849,66.350564 160.619638,67.3886332 C160.803029,67.5331744 160.913291,67.6954263 161.039551,67.8576782 L161.039551,62.4668027 Z M161.039551,74.9573401 C159.93978,76.565576 157.796799,77.3808346 154.89569,77.3808346 L146.15237,77.3808346 L146.15237,73.3182534 L154.860268,73.3182534 C155.724088,73.3182534 156.328533,73.2045628 156.692458,72.8492084 C157.00782,72.5561267 157.227774,72.1305012 157.227774,71.6134662 C157.227774,71.0615813 157.00782,70.623387 156.674747,70.3605847 C156.346244,70.0715021 155.868058,69.9401009 155.079651,69.9401009 C150.828538,69.7955597 145.525073,70.0715021 145.525073,64.0761813 C145.525073,61.3281831 147.269852,58.4356436 152.020861,58.4356436 L161.038979,58.4356436 L161.038979,54.6661442 L152.660156,54.6661442 C150.13154,54.6661442 148.294781,55.2717321 146.993909,56.21325 L146.993909,54.6661442 L134.600494,54.6661442 C132.618622,54.6661442 130.29225,55.1574702 129.191908,56.21325 L129.191908,54.6661442 L107.060525,54.6661442 L107.060525,56.21325 C105.299178,54.9426579 102.327226,54.6661442 100.955513,54.6661442 L86.3574148,54.6661442 L86.3574148,56.21325 C84.9639912,54.8638172 81.865209,54.6661442 79.9764602,54.6661442 L63.6387253,54.6661442 L59.9000766,58.7121573 L56.3985213,54.6661442 L31.9933263,54.6661442 L31.9933263,81.1017727 L55.9391885,81.1017727 L59.7915278,76.9917729 L63.4204851,81.1017727 L78.1808347,81.1149128 L78.1808347,74.89621 L79.6319606,74.89621 C81.5904092,74.9264894 83.9002131,74.8476487 85.9380737,73.9666896 L85.9380737,81.1012014 L98.112677,81.1012014 L98.112677,74.21121 L98.6999831,74.21121 C99.449541,74.21121 99.5232399,74.2420607 99.5232399,74.9910473 L99.5232399,81.1006301 L136.507525,81.1006301 C138.855607,81.1006301 141.309952,80.4996126 142.669097,79.4089829 L142.669097,81.1006301 L154.400364,81.1006301 C156.841569,81.1006301 159.225643,80.7584157 161.039551,79.8820271 L161.039551,74.9573401 L161.039551,74.9573401 L161.039551,74.9573401 L161.039551,74.9573401 Z M142.979889,67.3886332 C143.86142,68.3010143 144.333893,69.452774 144.333893,71.402653 C144.333893,75.4783743 141.787567,77.3808346 137.221662,77.3808346 L128.403501,77.3808346 L128.403501,73.3182534 L137.186241,73.3182534 C138.044919,73.3182534 138.653935,73.2045628 139.035569,72.8492084 C139.346933,72.5561267 139.570315,72.1305012 139.570315,71.6134662 C139.570315,71.0615813 139.328651,70.623387 139.017859,70.3605847 C138.671645,70.0715021 138.194031,69.9401009 137.405624,69.9401009 C133.17165,69.7955597 127.869327,70.0715021 127.869327,64.0761813 C127.869327,61.3281831 129.595824,58.4356436 134.342263,58.4356436 L143.418655,58.4356436 L143.418655,62.4679453 L135.11353,62.4679453 C134.290273,62.4679453 133.754957,62.498796 133.299623,62.8101596 C132.803726,63.1169528 132.619765,63.5722864 132.619765,64.1733039 C132.619765,64.8880119 133.04082,65.3741962 133.610415,65.5844381 C134.08803,65.7506891 134.601066,65.7992504 135.372333,65.7992504 L137.809539,65.864951 C140.267312,65.9249385 141.954389,66.3499927 142.979889,67.3886332 C142.979889,67.3886332 141.954389,66.3499927 142.979889,67.3886332 L142.979889,67.3886332 L142.979889,67.3886332 Z M102.126697,66.2185915 C101.521109,66.5779451 100.772122,66.6087958 99.8911632,66.6087958 L94.3911676,66.6087958 L94.3911676,62.3536834 L99.9660047,62.3536834 C100.772122,62.3536834 101.578811,62.3708227 102.126697,62.6958978 C102.713432,63.0026909 103.064216,63.5894257 103.064216,64.4001137 C103.064216,65.2108017 102.713432,65.8638084 102.126697,66.2185915 C102.126697,66.2185915 102.713432,65.8638084 102.126697,66.2185915 L102.126697,66.2185915 L102.126697,66.2185915 Z M104.860984,68.5763854 C105.868773,68.9483078 106.692602,69.6150259 107.078807,70.1669108 C107.718102,71.0918607 107.810654,71.9551092 107.828936,73.6250466 L107.828936,77.3808346 L103.283598,77.3808346 L103.283598,75.0104719 C103.283598,73.8707096 103.39329,72.1830616 102.551751,71.3021025 C101.890175,70.623387 100.881814,70.4611351 99.2301582,70.4611351 L94.3917389,70.4611351 L94.3917389,77.3808346 L89.8424022,77.3808346 L89.8424022,58.4350723 L100.295079,58.4350723 C102.587172,58.4350723 104.256538,58.536194 105.742514,59.3291715 C107.171359,60.19242 108.070029,61.3750304 108.070029,63.5362939 C108.069457,66.5602345 106.052735,68.1033412 104.860984,68.5763854 C104.860984,68.5763854 106.052735,68.1033412 104.860984,68.5763854 L104.860984,68.5763854 L104.860984,68.5763854 Z M110.580362,58.4350723 L125.690924,58.4350723 L125.690924,62.3531121 L115.089136,62.3531121 L115.089136,65.7975365 L125.432121,65.7975365 L125.432121,69.6630159 L115.089136,69.6630159 L115.089136,73.4325153 L125.690924,73.4496546 L125.690924,77.3808346 L110.580362,77.3808346 L110.580362,58.4350723 L110.580362,58.4350723 L110.580362,58.4350723 L110.580362,58.4350723 Z M80.0341624,67.1783913 L74.1833828,67.1783913 L74.1833828,62.3536834 L80.0867229,62.3536834 C81.7212391,62.3536834 82.8558595,63.0198302 82.8558595,64.6766274 C82.8558595,66.3151428 81.7737995,67.1783913 80.0341624,67.1783913 L80.0341624,67.1783913 L80.0341624,67.1783913 L80.0341624,67.1783913 Z M69.6740378,75.6577654 L62.7229163,67.940518 L69.6740378,60.4683624 L69.6740378,75.6577654 L69.6740378,75.6577654 L69.6740378,75.6577654 L69.6740378,75.6577654 Z M51.7229251,73.4325153 L40.5915328,73.4325153 L40.5915328,69.6630159 L50.5311737,69.6630159 L50.5311737,65.7975365 L40.5915328,65.7975365 L40.5915328,62.3531121 L51.9423079,62.3531121 L56.8944178,67.8742462 L51.7229251,73.4325153 L51.7229251,73.4325153 L51.7229251,73.4325153 L51.7229251,73.4325153 Z M87.7165599,64.6766274 C87.7165599,69.9395296 83.7899504,71.0261601 79.8324902,71.0261601 L74.1833828,71.0261601 L74.1833828,77.3808346 L65.3835042,77.3808346 L59.8086671,71.109 L54.0150184,77.3808346 L36.0816164,77.3808346 L36.0816164,58.4350723 L54.2909609,58.4350723 L59.8612275,64.6452054 L65.6200263,58.4350723 L80.0867229,58.4350723 C83.6796877,58.4350723 87.7165599,59.4297219 87.7165599,64.6766274 C87.7165599,64.6766274 87.7165599,59.4297219 87.7165599,64.6766274 L87.7165599,64.6766274 L87.7165599,64.6766274 Z M87.7165599,64.6766274" fill="#FFFFFF" id="Shape"/>
</g></g></svg>



export const VisaCardIcon = ({width=20, height=20,bgColor="#3F51B5",inColor1="#FF3D00",inColor2="#FFC107"}) => <svg enableBackground="new 0 0 780 500" height={height} viewBox="0 0 780 500" width={width} xmlns="http://www.w3.org/2000/svg" ><path d="m293.2 348.73 33.359-195.76h53.358l-33.384 195.76zm246.11-191.54c-10.569-3.966-27.135-8.222-47.821-8.222-52.726 0-89.863 26.551-90.181 64.604-.297 28.129 26.515 43.822 46.754 53.185 20.771 9.598 27.752 15.716 27.652 24.283-.133 13.123-16.586 19.115-31.924 19.115-21.355 0-32.701-2.967-50.225-10.273l-6.878-3.111-7.487 43.822c12.463 5.467 35.508 10.199 59.438 10.445 56.09 0 92.502-26.248 92.916-66.885.199-22.27-14.016-39.215-44.801-53.188-18.65-9.056-30.072-15.099-29.951-24.269 0-8.137 9.668-16.838 30.56-16.838 17.446-.271 30.088 3.534 39.936 7.5l4.781 2.259zm137.31-4.223h-41.23c-12.772 0-22.332 3.486-27.94 16.234l-79.245 179.4h56.031s9.159-24.121 11.231-29.418c6.123 0 60.555.084 68.336.084 1.596 6.854 6.492 29.334 6.492 29.334h49.512l-43.187-195.64zm-65.417 126.41c4.414-11.279 21.26-54.724 21.26-54.724-.314.521 4.381-11.334 7.074-18.684l3.606 16.878s10.217 46.729 12.353 56.527h-44.293zm-363.3-126.41-52.239 133.5-5.565-27.129c-9.726-31.274-40.025-65.157-73.898-82.12l47.767 171.2 56.455-.063 84.004-195.39-56.524-.001" fill="#0e4595"/><path d="m146.92 152.96h-86.041l-.682 4.073c66.939 16.204 111.23 55.363 129.62 102.42l-18.709-89.96c-3.229-12.396-12.597-16.096-24.186-16.528" fill="#f2ae14"/></svg>

export const DiscoverDinersCardIcon = ({width=20, height=20,bgColor="#3F51B5",inColor1="#FF3D00",inColor2="#FFC107"}) =>  <svg height={height} viewBox="0 0 53.333332 34.666668" width={width} xmlns="http://www.w3.org/2000/svg" ><g transform="matrix(.13333333 0 0 -.13333333 0 34.666667)"><path d="m400 0h-400v260h400z" fill="#eee"/><path d="m400 123.699s-121.094-85.4568-342.8906-123.699h342.8906z" fill="#eb8518"/><g fill="#333"><path d="m57.5234 165.047c-3.2812-2.965-7.539-4.246-14.2929-4.246h-2.8008v35.39h2.8008c6.7539 0 10.8437-1.211 14.2929-4.328 3.6094-3.218 5.7813-8.191 5.7813-13.328s-2.1719-10.262-5.7813-13.488zm-12.1992 40.219h-15.3242v-53.528h15.25c8.1094 0 13.9531 1.907 19.1016 6.184 6.1015 5.039 9.7109 12.664 9.7109 20.547 0 15.789-11.8008 26.797-28.7383 26.797"/><path d="m80.0391 151.738h10.4492v53.528h-10.4492z"/><path d="m120.406 184.727c-6.265 2.312-8.109 3.847-8.109 6.738 0 3.371 3.273 5.93 7.777 5.93 3.129 0 5.696-1.282 8.41-4.34l5.465 7.152c-4.476 3.934-9.855 5.938-15.726 5.938-9.469 0-16.696-6.575-16.696-15.344 0-7.363 3.368-11.133 13.176-14.668 4.086-1.445 6.164-2.403 7.223-3.055 2.074-1.359 3.117-3.293 3.117-5.531 0-4.332-3.441-7.547-8.102-7.547-4.984 0-8.992 2.488-11.394 7.129l-6.7501-6.484c4.8201-7.059 10.5941-10.196 18.5431-10.196 10.848 0 18.457 7.207 18.457 17.571 0 8.515-3.516 12.363-15.391 16.707"/><path d="m139.77 178.469c0-15.735 12.359-27.942 28.257-27.942 4.493 0 8.352.879 13.086 3.118v12.293c-4.179-4.168-7.867-5.86-12.597-5.86-10.52 0-17.985 7.617-17.985 18.457 0 10.274 7.696 18.387 17.496 18.387 4.981 0 8.754-1.774 13.086-6.024v12.286c-4.586 2.324-8.355 3.293-12.843 3.293-15.813 0-28.5-12.442-28.5-28.008"/><path d="m263.895 169.316-14.266 35.95h-11.406l22.707-54.895h5.625l23.113 54.895h-11.309z"/><path d="m294.395 151.738h29.609v9.063h-19.18v14.441h18.477v9.074h-18.477v11.875h19.18v9.075h-29.609z"/><path d="m344.402 180.613h-3.054v16.223h3.222c6.485 0 10.02-2.734 10.02-7.938 0-5.382-3.535-8.285-10.188-8.285zm20.942 8.852c0 10.008-6.906 15.801-18.938 15.801h-15.488v-53.528h10.43v21.492h1.367l14.433-21.492h12.852l-16.855 22.551c7.871 1.602 12.199 6.973 12.199 15.176"/></g><path d="m239.512 178.145c0-15.547-12.598-28.145-28.145-28.145-15.543 0-28.14 12.598-28.14 28.145 0 15.558 12.597 28.144 28.14 28.144 15.547 0 28.145-12.586 28.145-28.144" fill="#eb8518"/></g></svg>
    


export  const JapanCreditBureauCardIcon = ({width=20,height=20}) => <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width={width} height={height} viewBox="0 0 512 512" enableBackground="new 0 0 512 512" space="preserve">  <image id="image0" width="512" height="512" x="0" y="0" href="data:image/png;base64,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
ZSBJbWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg==" /> </svg>