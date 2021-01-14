module.exports = {
  shadowDomSelector: {
    queryOne: function a (element, selector) {
      const modifiedSelector = `document.querySelector('` + selector.replaceAll('|', `')?.shadowRoot.querySelector('`) + `')`;
      
      console.log('registerCustomQueryHandler ONE')
      console.log('registerCustomQueryHandler selector', selector)
      console.log('registerCustomQueryHandler modified selector', modifiedSelector);
      console.log('registerCustomQueryHandler element', element);

      return eval(modifiedSelector);
    },
    queryAll: (element, selector) => {
      const modifiedSelector = `document.querySelector('` + selector.replaceAll('|', `')?.shadowRoot.querySelector('`).replace('@', `')?.shadowRoot.querySelectorAll('`) + `')`;

      console.log('registerCustomQueryHandler ALL')
      console.log('registerCustomQueryHandler selector', selector)
      console.log('registerCustomQueryHandler modified selector', modifiedSelector);
      return eval(modifiedSelector);
    },
  }
};