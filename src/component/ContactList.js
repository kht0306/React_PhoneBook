import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";
import SearchBox from "./SearchBox";

const ContactList = () => {
  const { contactList, keyword } = useSelector((state) => state);
  let [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (keyword !== "") {
      let list = contactList?.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList("" || contactList);
    }
  }, [keyword, contactList]);

  console.log("contactList = ", contactList);
  console.log("keyword = ", keyword);

  return (
    <div>
      <SearchBox />
      {filteredList.map((item, index) => (
        <ContactItem
          name={item.name}
          key={index}
          phoneNumber={item.phoneNumber}
          filteredList={filteredList}
          setFilteredList={setFilteredList}
        />
      ))}
    </div>
  );
};

export default ContactList;
