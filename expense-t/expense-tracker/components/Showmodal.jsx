export function Showmodal() {
  return (
    <div>
      <button
        className="btn bg-blue-600 text-white px-8"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        +add
      </button>
      <dialog id="my_modal_2" className="modal ">
        <div className="modal-box grid grid-cols-2 ">
          <div className="p-4">
            <h3 className="font-bold text-lg mb-5">add record</h3>
            <div className="flex">
              <button className="btn bg-blue-600">Expense</button>
              <button className="btn">Income</button>
            </div>

            <p>Amout</p>
            <input
              className="py-4 input-sm w-full rounded"
              placeholder="₮ 000,00"
            />
            <div>
              <div className="dropdown ">
                <div tabIndex={0} role="button" className="btn mt-3">
                  Category
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-10 menu p-2 shadow fixed  bg-slate-900 text-slate-200 rounded-box w-52"
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
            <button className="btn w-full bg-blue-600 mt-4">Add Record</button>
          </div>
          <div className="p-4">
            <p className="">payee</p>
            <input
              className="input-sm rounded w-full"
              placeholder="write here"
            ></input>
            <p className="mt-4 mb-2">Note</p>
            <textarea
              type=""
              className="input-sm rounded w-full h-full "
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
