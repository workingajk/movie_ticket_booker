document.addEventListener("DOMContentLoaded", () => {
    function makeSeats(id) {
        const seats = document.getElementById(id);
        console.log(seats);
        let rows = 10,
            cols = 10;
        // seats.classList.add(`grid-cols-${cols}`);
        seats.style.gridTemplateColumns = `repeat(${cols}, 32px)`;
        // seats.classList.add(`repeat(${cols},40px)`);
        // seats.style.gridTemplateColumns= `repeat(${cols}, 40px) `

        for (let i = 0; i < rows; i++) {
            let color;
            if (i < 3) {
                color = "bg-blue-400";
            } else if (i < 7) {
                color = "bg-yellow-300";
            } else {
                color = "bg-gray-300";
            }
            for (let j = 0; j < cols; j++) {
                const seat = document.createElement("div");
                seat.classList.add("w-8", color, "h-8");

                seat.addEventListener("click", () => {
                    if (seat.classList.contains("bg-gray-300")) {
                        seat.classList.toggle("bg-yellow-300");
                        seat.classList.toggle("bg-gray-300");
                    } else if (seat.classList.contains("bg-yellow-300")) {
                        seat.classList.toggle("bg-yellow-300");
                        seat.classList.toggle("bg-blue-400");
                    } else if (seat.classList.contains("bg-blue-400")) {
                        seat.classList.toggle("bg-blue-400");
                        seat.classList.toggle("bg-gray-300");
                    }
                });

                seats.appendChild(seat);
            }
        }
    }
    makeSeats("seats");
    makeSeats("seatsModal");

    const theaterEditModal = document.getElementsByClassName("editTheater");
    const allModals = document.getElementById("allModals");

    for (let i = 0; i < theaterEditModal.length; i++) {
        theaterEditModal[i].setAttribute(
            `data-modal-target`,
            `default-modal${i}`,
        );
        theaterEditModal[i].setAttribute(
            `data-modal-toggle`,
            `default-modal${i}`,
        );

        const newModal = `
        <!-- Main modal -->
                        <div id="default-modal${i}" tabindex="-1" aria-hidden="true"
                                class="hidden fixed inset-0 z-50
           items-center justify-center
           w-full h-full
           overflow-y-auto">
                                <div class="relative p-4 w-full max-w-2xl max-h-full">
                                    <!-- Modal content -->
                                    <div class="relative bg-blue-50  rounded-xl shadow-sm p-4 md:p-6">
                                        <!-- Modal header -->
                                        <div
                                            class="flex items-center justify-between border-b border-default pb-4 md:pb-5">
                                            <h3 class="text-lg font-medium text-heading">
                                                Configure Theater Details
                                            </h3>
                                            <button type="button"
                                                class="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-xl text-sm w-9 h-9 ms-auto inline-flex justify-center items-center"
                                                data-modal-hide="default-modal${i}">
                                                <svg class="w-5 h-5" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="2"
                                                        d="M6 18 17.94 6M18 18 6.06 6" />
                                                </svg>
                                                <span class="sr-only">Close modal</span>
                                            </button>
                                        </div>
                                        <!-- Modal body -->
                                        <div class="space-y-4 md:space-y-6 py-4 md:py-6  grid grid-cols-3 px-3">
                                            <label for="name${i}">Name : </label>
                                            <input type="text" id="name${i}" class="rounded-xl col-span-2 border-none"
                                                value="JK CINEMAS (SCREEN 1) ">
                                            
                                            <label for="capacity${i}">Capacity : </label>
                                            <input type="number" id="capacity${i}" class="rounded-xl col-span-2 border-none"
                                                value="250">
                                            
                                            <label for="type${i}">Screen Type : </label>
                                            <input type="text" id="type${i}" class="rounded-xl col-span-2 border-none"
                                                value="IMAX Laser">
                                            
                                            <label for="status${i}">Status : </label>
                                            <input type="text" id="status${i}" class="rounded-xl col-span-2 border-none"
                                                value="Online">
                                            



                                        </div>
                                        <!-- Modal footer -->
                                        <div
                                            class="flex justify-end items-center border-t border-default space-x-4 pt-4 md:pt-5">
                                            <button data-modal-hide="default-modal${i}" type="button"
                                                class="text-white bg-gray-400 box-border hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-xl text-sm px-4 py-2.5 focus:outline-none">Cancel</button>
                                            <button data-modal-hide="default-modal${i}" type="button"
                                                class="text-white bg-blue-300 box-border  hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 shadow-xs font-medium leading-5 rounded-xl text-sm px-4 py-2.5 focus:outline-none">Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

        `;

        allModals.insertAdjacentHTML("beforeend", newModal);
    }
    initModals();
});
// seats.appendChild('div')
