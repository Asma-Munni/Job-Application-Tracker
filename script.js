let interviewList = [];
let rejectList = [];

let total = document.getElementById('total');
let interviewCount = document.getElementById("interview");
let rejectCount = document.getElementById("reject")

 //console.log(reject);
// get all button
const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectFilterBtn = document.getElementById('reject-filter-btn');


 const allCardSection = document.getElementById('allCards');
 const mainContainer = document.getElementsByTagName('main');
 const mainContainer2 = document.getElementsByClassName('main-section')[0];
 const filterSection = document.getElementById('filtered-section')

 


 function calculateCount(){
    total.innerText = allCardSection.children.length
    interviewCount.innerText = interviewList.length
    rejectCount.innerText = rejectList
 }

 calculateCount()

 function toggleStyle(id){
  //initially color remove
   allFilterBtn.classList.remove('bg-[#3b82f6]', 'text-white')
   interviewFilterBtn.classList.remove('bg-[#3b82f6]', 'text-white')
   rejectFilterBtn.classList.remove('bg-[#3b82f6]', 'text-white')

    //add initial color
   allFilterBtn.classList.add('bg-white', 'text-black')
   interviewFilterBtn.classList.add('bg-white', 'text-black')
   rejectFilterBtn.classList.add('bg-white', 'text-black')

  //console.log(id);
   const selected = document.getElementById(id)


   console.log(selected);
   // color change on selected item
   selected.classList.remove('bg-white','text-black')
   selected.classList.add('bg-blue-500', 'text-white')

 }

 mainContainer2.addEventListener('click', function(event){

      // console.log(event.target.parentNode.parentNode);
      console.log(event.target.classList.contains('interview'));

   if(event.target.classList.contains('interview')){
       const parenNode = event.target.parentNode.parentNode
    console.log(parenNode, event.target)
    const companyName = parenNode.querySelector('.companyName').textContent
   const jobName = parenNode.querySelector('.jobName').textContent
   const jobCriteria = parenNode.querySelector('.jobCriteria').textContent
    const statusBadge = parenNode.querySelector('.statusBadge').textContent
    const notes = parenNode.querySelector('.notes').textContent


    const cardInfo = {
      companyName,
      jobName, 
      jobCriteria, 
      statusBadge, 
      notes
    }

    const companyExist = interviewList.find(items=> items.companyName == cardInfo.companyName)

    parenNode.querySelector('.statusBadge').innerText = 'Interview'
   
   if(!companyExist) {
      interviewList.push(cardInfo)
   }
   renderInterview()
   }
    
 })


 function renderInterview() {
    filterSection.innerHTML = ''

   for(let interview of interviewList){
      console.log(interview);
      let div = document.createElement('div');
      div.className = 'jobCard bg-[#ffffff] p-6 md:flex rounded-md '
      div.innerHTML = `
           <div class="left space-y-2">
                 
            <div>
                <p class=" companyName text-[#002c5c] font-bold">Mobile First Corp</p>
                <p class="jobName  text-[#64748b]">React Native Developer</p>
            </div>
           
        
        <div>
            <p class=" jobCriteria text-[#64748b]">Remote • Full-time • $130,000 - $175,000</p>
        </div>
         
        <button class=" statusBadge bg-[#eef4ff] text-[64748b] py-2 px-3 rounded-md">Not Applicable</button>

         <p class=" notes text-[#323b49]">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>

         <div class="flex gap-2">
            <button class="interview  bg-[#ffffff] py-3 px-6 text-[#10b981] rounded-md border border-green-600">Interview</button> 
             <button class="reject  bg-[#ffffff] py-3 px-6 text-[#ef4444] rounded-md border border-red-600">Rejected</button>  
         </div></div>

      `
   }

 }

