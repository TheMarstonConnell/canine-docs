"use strict";(self.webpackChunkcanine_docs=self.webpackChunkcanine_docs||[]).push([[8425],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||k[d]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8602:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:2},l="Accessing JKL Tokens on a Decentralized Exchange and Withdrawing to Jackal Protocol",i={unversionedId:"using-jackal/fund",id:"using-jackal/fund",title:"Accessing JKL Tokens on a Decentralized Exchange and Withdrawing to Jackal Protocol",description:"This guide will help you access JKL tokens on the Osmosis Decentralized Exchange (DEX) and withdraw them to the Jackal Protocol using the Inter-Blockchain Communication Protocol (IBC).",source:"@site/docs/using-jackal/fund.md",sourceDirName:"using-jackal",slug:"/using-jackal/fund",permalink:"/docs/using-jackal/fund",draft:!1,editUrl:"https://github.com/JackalLabs/canine-docs/blob/master/docs/using-jackal/fund.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Keplr Wallet",permalink:"/docs/using-jackal/wallet/keplr"},next:{title:"How to Delegate JKL Tokens to a Validator",permalink:"/docs/using-jackal/delegate"}},s={},c=[{value:"Step 1: Set up a Keplr Wallet",id:"step-1-set-up-a-keplr-wallet",level:2},{value:"Step 2: Access the Osmosis DEX",id:"step-2-access-the-osmosis-dex",level:2},{value:"Step 3: Swap tokens for JKL on Osmosis",id:"step-3-swap-tokens-for-jkl-on-osmosis",level:2},{value:"Step 4: Withdraw JKL tokens to Jackal Protocol via IBC",id:"step-4-withdraw-jkl-tokens-to-jackal-protocol-via-ibc",level:2}],p={toc:c},u="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"accessing-jkl-tokens-on-a-decentralized-exchange-and-withdrawing-to-jackal-protocol"},"Accessing JKL Tokens on a Decentralized Exchange and Withdrawing to Jackal Protocol"),(0,o.kt)("p",null,"This guide will help you access JKL tokens on the Osmosis Decentralized Exchange (DEX) and withdraw them to the Jackal Protocol using the Inter-Blockchain Communication Protocol (IBC)."),(0,o.kt)("h2",{id:"step-1-set-up-a-keplr-wallet"},"Step 1: Set up a Keplr Wallet"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the ",(0,o.kt)("a",{parentName:"li",href:"https://wallet.keplr.app/"},"Keplr Wallet")," or ",(0,o.kt)("a",{parentName:"li",href:"https://www.leapwallet.io/"},"Leap Wallet"),"browser extension."),(0,o.kt)("li",{parentName:"ol"},"Create a new wallet or import an existing one."),(0,o.kt)("li",{parentName:"ol"},"Make sure you have some OSMO tokens in your wallet for transaction fees.")),(0,o.kt)("h2",{id:"step-2-access-the-osmosis-dex"},"Step 2: Access the Osmosis DEX"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Visit the ",(0,o.kt)("a",{parentName:"li",href:"https://app.osmosis.zone/"},"Osmosis DEX")," website."),(0,o.kt)("li",{parentName:"ol"},'Connect your Keplr Wallet by clicking "Connect Wallet" in the top right corner.')),(0,o.kt)("h2",{id:"step-3-swap-tokens-for-jkl-on-osmosis"},"Step 3: Swap tokens for JKL on Osmosis"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Click "Swap" in the Osmosis navigation bar.'),(0,o.kt)("li",{parentName:"ol"},"Select the token you want to swap for JKL, such as OSMO or ATOM."),(0,o.kt)("li",{parentName:"ol"},"Enter the amount you want to swap and confirm the transaction in your Keplr Wallet."),(0,o.kt)("li",{parentName:"ol"},"Once the transaction is complete, you will see the JKL tokens in your wallet.")),(0,o.kt)("h2",{id:"step-4-withdraw-jkl-tokens-to-jackal-protocol-via-ibc"},"Step 4: Withdraw JKL tokens to Jackal Protocol via IBC"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Visit the ",(0,o.kt)("a",{parentName:"li",href:"https://app.osmosis.zone/assets"},"Assets Page"),"."),(0,o.kt)("li",{parentName:"ol"},'Find the JKL asset and click "withdraw".'),(0,o.kt)("li",{parentName:"ol"},"Once you sign the transaction with your Keplr wallet, an IBC transfer has begun and your JKL tokens will be available\non the Jackal Protocol shortly.")),(0,o.kt)("p",null,"Now you have successfully accessed JKL tokens on the Osmosis DEX and withdrawn them to the Jackal Protocol using IBC."))}k.isMDXComponent=!0}}]);