export function addScript(src, id) { // src: string, id: string
    if (document.getElementById(id)) return;
    const promise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.id = id;
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      script.onabort = reject;
      document.head.appendChild(script);
    });
    
    return promise;
  };
  
  export function addInlineScript(src, id) { // src: string, id: string
    if (document.getElementById(id)) return;
    const script = document.createElement('script');
    script.id = id;
    script.innerHTML = src;
    script.async = false;
    script.defer = false;
    document.head.appendChild(script);
  };