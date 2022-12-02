

const useFetch = ( url ) => {
  const [state, setState] = uSeState({
    data:null,
    isLoading: true,
    hasError:null,
  })

  const getFetch =async () => {

    setState({
      ...state,
      isLoading: true,
    })

    const resp = await fetch(url);
    const data = await resp.json();

    setState({
      data,
      isLoading: false,
      hasError:null
    })
  }

  useEffect(() => {
    getFetch
  }, [url]) //cada vez que el url cambie entonces se va a volver a disparar
  

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  }
}

export default useFetch