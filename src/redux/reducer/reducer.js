let initialState = {
  contactList: [],
  keyword: "",
};
function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      };
    case "SEARCH-LIST":
      return {
        ...state,
        keyword: payload.keyword,
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        contactList: payload.deleteList,
      };

    default:
      return { ...state };
  }
}

export default reducer;
