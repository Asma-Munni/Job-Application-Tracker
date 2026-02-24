// ================== DATA ==================
let interviewList = [];
let rejectList = [];

// ================== ELEMENTS ==================
const total = document.getElementById('total');
const interviewCount = document.getElementById("interview");
const rejectCount = document.getElementById("reject");

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectFilterBtn = document.getElementById('reject-filter-btn');

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('.main-section');
const filterSection = document.getElementById('filtered-section');


// ================== COUNT FUNCTION ==================
function calculateCount(){
   total.innerText = allCardSection.children.length;
   interviewCount.innerText = interviewList.length;
   rejectCount.innerText = rejectList.length;
}

calculateCount();


// ================== FILTER BUTTON STYLE ==================
function toggleStyle(id){

   // reset style
   [allFilterBtn, interviewFilterBtn, rejectFilterBtn].forEach(btn=>{
      btn.classList.remove('bg-blue-500','text-white');
      btn.classList.add('bg-white','text-black');
   });

   const selected = document.getElementById(id);
   selected.classList.remove('bg-white','text-black');
   selected.classList.add('bg-blue-500','text-white');

   // SHOW SECTION
   if(id === 'all-filter-btn'){
      allCardSection.classList.remove('hidden');
      filterSection.classList.add('hidden');
   }

   else if(id === 'interview-filter-btn'){
      renderList(interviewList);
   }

   else if(id === 'reject-filter-btn'){
      renderList(rejectList);
   }
}


// ================== EVENT DELEGATION ==================
mainContainer.addEventListener('click', function(event){

   const card = event.target.closest('.jobCard');
   if(!card) return;

   const companyName = card.querySelector('.companyName').textContent;
   const jobName = card.querySelector('.jobName').textContent;
   const jobCriteria = card.querySelector('.jobCriteria').textContent;
   const notes = card.querySelector('.notes').textContent;
   const badge = card.querySelector('.statusBadge');

   const cardInfo = {
      companyName,
      jobName,
      jobCriteria,
      notes
   };

   // ========= INTERVIEW =========
   if(event.target.classList.contains('interview')){

      badge.innerText = 'Interview';

      // remove from reject list if exists
      rejectList = rejectList.filter(item => item.companyName !== companyName);

      // add to interview list (no duplicate)
      if(!interviewList.find(item => item.companyName === companyName)){
         interviewList.push({...cardInfo, status:'Interview'});
      }

      calculateCount();
   }

   // ========= REJECT =========
   else if(event.target.classList.contains('reject')){

      badge.innerText = 'Rejected';

      // remove from interview list if exists
      interviewList = interviewList.filter(item => item.companyName !== companyName);

      // add to reject list
      if(!rejectList.find(item => item.companyName === companyName)){
         rejectList.push({...cardInfo, status:'Rejected'});
      }

      calculateCount();
   }

});


// ================== RENDER FUNCTION ==================
function renderList(list){

   filterSection.innerHTML = '';
   allCardSection.classList.add('hidden');
   filterSection.classList.remove('hidden');

   if(list.length === 0){
      filterSection.innerHTML = `
         <div class="text-center bg-white p-10 rounded-md">
            <p class="font-bold text-gray-600">No Data Found</p>
         </div>
      `;
      return;
   }

   list.forEach(item=>{

      const div = document.createElement('div');
      div.className = 'jobCard bg-white p-6 md:flex rounded-md';

      div.innerHTML = `
         <div class="left space-y-2">

            <div>
               <p class="companyName text-[#002c5c] font-bold">
                  ${item.companyName}
               </p>
               <p class="jobName text-[#64748b]">
                  ${item.jobName}
               </p>
            </div>

            <div>
               <p class="jobCriteria text-[#64748b]">
                  ${item.jobCriteria}
               </p>
            </div>

            <button class="statusBadge bg-[#eef4ff] py-2 px-3 rounded-md">
               ${item.status}
            </button>

            <p class="notes text-[#323b49]">
               ${item.notes}
            </p>

            <div class="flex gap-2">
               <button class="interview bg-white py-3 px-6 text-[#10b981] rounded-md border border-green-600">
                  Interview
               </button>
               <button class="reject bg-white py-3 px-6 text-[#ef4444] rounded-md border border-red-600">
                  Rejected
               </button>
            </div>

         </div>
      `;

      filterSection.appendChild(div);
   });

}