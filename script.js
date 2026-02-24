let interviewList = [];
let rejectList = [];
let currentStatus = 'all'

let total = document.getElementById('total');
let interviewCount = document.getElementById("interview");
let rejectCount = document.getElementById("reject");

let 

// get all button
const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectFilterBtn = document.getElementById('reject-filter-btn');

const allCardSection = document.getElementById('allCards');
const mainContainer2 = document.getElementsByClassName('main-section')[0];
const filterSection = document.getElementById('filtered-section');


//  COUNT 
function calculateCount(){
   total.innerText = allCardSection.children.length
   interviewCount.innerText = interviewList.length
   rejectCount.innerText = rejectList.length
}

calculateCount()


//  FILTER BUTTON STYLE 
function toggleStyle(id){

   // remove active style
   allFilterBtn.classList.remove('bg-[#3b82f6]', 'text-white')
   interviewFilterBtn.classList.remove('bg-[#3b82f6]', 'text-white')
   rejectFilterBtn.classList.remove('bg-[#3b82f6]', 'text-white')

   // add default style
   allFilterBtn.classList.add('bg-white', 'text-black')
   interviewFilterBtn.classList.add('bg-white', 'text-black')
   rejectFilterBtn.classList.add('bg-white', 'text-black')

   const selected = document.getElementById(id)
   currentStatus = id
   console.log(selected)


   selected.classList.remove('bg-white','text-black')
   selected.classList.add('bg-[#3b82f6]', 'text-white')

   if(id == 'all-filter-btn'){
      allCardSection.classList.remove('hidden')
      filterSection.classList.add('hidden')
   }

   else if(id == 'interview-filter-btn'){
      allCardSection.classList.add('hidden')
      filterSection.classList.remove('hidden')
      renderInterview()
   }

   else if(id == 'reject-filter-btn'){
      allCardSection.classList.add('hidden')
      filterSection.classList.remove('hidden')
      renderReject()
   }
}


//  CLICK EVENT 
mainContainer2.addEventListener('click', function(event){

   if(event.target.classList.contains('interview')){

      const parenNode = event.target.parentNode.parentNode

      const companyName = parenNode.querySelector('.companyName').textContent
      const jobName = parenNode.querySelector('.jobName').textContent
      const jobCriteria = parenNode.querySelector('.jobCriteria').textContent
      const notes = parenNode.querySelector('.notes').textContent

      parenNode.querySelector('.statusBadge').innerText = 'Interview'

      const cardInfo = {
         companyName,
         jobName,
         jobCriteria,
         statusBadge: 'Interview',
         notes
      }
     const remainingCards = rejectList.filter(item =>item.companyName != companyName.trim())
     rejectList = remainingCards
      const companyExist = interviewList.find(items =>
         items.companyName == cardInfo.companyName
      )

      if(!companyExist){
         interviewList.push(cardInfo)
      }

      calculateCount()
      renderInterview()
   }


   else if(event.target.classList.contains('reject')){

      const parenNode = event.target.parentNode.parentNode

      const companyName = parenNode.querySelector('.companyName').textContent
      const jobName = parenNode.querySelector('.jobName').textContent
      const jobCriteria = parenNode.querySelector('.jobCriteria').textContent
      const notes = parenNode.querySelector('.notes').textContent

      parenNode.querySelector('.statusBadge').innerText = 'Rejected'

      const cardInfo = {
         companyName,
         jobName,
         jobCriteria,
         statusBadge: 'Rejected',
         notes
      }
     // console.log(interviewList, cardInfo.companyName.trim())
      const remainingCards = interviewList.filter(item =>item.companyName != companyName.trim())
      console.log(remainingCards)
     interviewList = remainingCards
      const companyExist = rejectList.find(items =>
         items.companyName == cardInfo.companyName
      )

      if(!companyExist){
         rejectList.push(cardInfo)
      }

      //if(currentStatus == "rejectFilterBtn"){
       //  renderReject()
     // }

      calculateCount()
      renderReject()
   }

})


//  RENDER INTERVIEW 
function renderInterview(){

   filterSection.innerHTML = ''

   for(let interview of interviewList){

      let div = document.createElement('div');
      div.className = 'jobCard bg-[#ffffff] p-6 md:flex rounded-md '

      div.innerHTML = `
         <div class="left space-y-2">

            <div>
               <p class="companyName text-[#002c5c] font-bold">
                  ${interview.companyName}
               </p>
               <p class="jobName text-[#64748b]">
                  ${interview.jobName}
               </p>
            </div>

            <div>
               <p class="jobCriteria text-[#64748b]">
                  ${interview.jobCriteria}
               </p>
            </div>

            <button class="statusBadge bg-[#eef4ff] py-2 px-3 rounded-md">
               ${interview.statusBadge}
            </button>

            <p class="notes text-[#323b49]">
               ${interview.notes}
            </p>

            <div class="flex gap-2">
               <button class="interview bg-[#ffffff] py-3 px-6 text-[#10b981] rounded-md border border-green-600">
                  Interview
               </button>
               <button class="reject bg-[#ffffff] py-3 px-6 text-[#ef4444] rounded-md border border-red-600">
                  Rejected
               </button>
            </div>

         </div>
      `

      filterSection.appendChild(div)
   }
}


//  RENDER REJECT 
function renderReject(){

   filterSection.innerHTML = ''

   for(let reject of rejectList){

      let div = document.createElement('div');
      div.className = 'jobCard bg-[#ffffff] p-6 md:flex rounded-md '

      div.innerHTML = `
         <div class="left space-y-2">

            <div>
               <p class="companyName text-[#002c5c] font-bold">
                  ${reject.companyName}
               </p>
               <p class="jobName text-[#64748b]">
                  ${reject.jobName}
               </p>
            </div>

            <div>
               <p class="jobCriteria text-[#64748b]">
                  ${reject.jobCriteria}
               </p>
            </div>

            <button class="statusBadge bg-[#eef4ff] py-2 px-3 rounded-md">
               ${reject.statusBadge}
            </button>

            <p class="notes text-[#323b49]">
               ${reject.notes}
            </p>

            <div class="flex gap-2">
               <button class="interview bg-[#ffffff] py-3 px-6 text-[#10b981] rounded-md border border-green-600">
                  Interview
               </button>
               <button class="reject bg-[#ffffff] py-3 px-6 text-[#ef4444] rounded-md border border-red-600">
                  Rejected
               </button>
            </div>

         </div>
      `

      filterSection.appendChild(div)
   }
}