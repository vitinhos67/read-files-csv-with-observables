exports.handleError = (error)=> {
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1]?.trim();
  
    if (!lastErrorLine) {
      console.error(error);
    }
  
    throw new Error(lastErrorLine || 'Ocorreu um erro inesperado.');
  };
  
  
exports.errorSubscribe = (err)  => {
      if(err) {
          console.log(err)
      }
  }
  