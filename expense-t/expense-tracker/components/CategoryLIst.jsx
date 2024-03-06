import { useEffect, useState } from "react";
import axios from "axios";
import { FaEye } from "react-icons/fa";
import IconPicker from "react-icon-picker";

export function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [inputCategory, setInputCategory] = useState();
  useEffect(() => {
    fetchCategory();
  }, []);
  function fetchCategory() {
    fetch("http://localhost:4000/Categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }
  function valueOfTheCategory(event) {
    setInputCategory(event.target.value);
  }
  async function createCategory() {
    try {
      await axios
        .post("http://localhost:4000/Categories", { inputCategory })
        .then(() => {});
      setInputCategory("");
      fetchCategory();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="mt-4">
      <h1 className="font-bold text-xl mb-4">Categories</h1>
      <div>
        {categories.map((item) => {
          return (
            <div className="flex">
              <div className="mt-2 mr-2">
                <FaEye />
              </div>
              <p className="my-1">{item.name}</p>
            </div>
          );
        })}
      </div>
      <div>
        <button
          className="btn mt-2"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          + New Category
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Write a new category</h3>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Category"
                onChange={valueOfTheCategory}
                className="py-4 input-md rounded w-full"
              ></input>

              <form method="dialog">
                <button onClick={createCategory} className="btn">
                  confirm
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}
