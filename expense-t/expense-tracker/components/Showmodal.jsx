import { useState } from "react";

export function Showmodal() {
  const [amount, setAmount] = useState();
  function addCard() {
    document.getElementById("my_modal_2").showModal();
  }
  function amountInput(event) {
    setAmount(event.target.value);
  }
  return (
    <div>
      <button className="btn bg-blue-600 text-white px-8" onClick={addCard}>
        +add
      </button>
      <dialog id="my_modal_2" className="modal ">
        <div className="modal-box grid grid-cols-2 ">
          <div className="p-4">
            <h3 className="font-bold text-lg mb-5">add record</h3>
            <div className="flex">
              <button className="btn  bg-blue-600">Expense</button>
              <button className="btn ">Income</button>
            </div>

            <p>Amout</p>
            <input
              className="py-4 input-sm w-full rounded border"
              placeholder="₮ 000,00"
              onChange={amountInput}
            />
            <div>
              <div className="dropdown ">
                <div tabIndex={0} role="button" className="btn mt-3">
                  Category
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-10 menu p-2 shadow fixed  bg-white dark:bg-black dark:text-slate-100 text-slate-900 rounded-box w-52"
                >
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Gift</a>
                  </li>
                  <li>
                    <a>Food</a>
                  </li>
                  <li>
                    <a>Shopping</a>
                  </li>
                </ul>
              </div>
            </div>
            <div></div>
            <button className="btn w-full bg-blue-600 mt-4">Add Record</button>
          </div>
          <div className="p-4">
            <p className="">payee</p>
            <input
              className="input-sm rounded border w-full"
              placeholder="write here"
            ></input>
            <p className="mt-4 mb-2">Note</p>
            <textarea
              type=""
              className="input-sm border rounded w-full h-full "
              placeholder="note"
            ></textarea>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
