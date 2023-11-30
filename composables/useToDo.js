const useToDo = () => {
  const { data: dataToDo } = useFetch('/api/users');
  return {
    dataToDo
  }
}
export default useToDo;