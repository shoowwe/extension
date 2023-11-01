(() => {
  var divElement;
  let prbname;

  console.log("This is working");
  var targetArea ;
  var originalContent = ' ';
  var getdesctag 
var getedictag 
var getsubtag 
var getsoluttag 
var  getdesctab
var getmaintab
var getedictab
var getsolutab
var getsubtab
var getsubsubtab

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, prb} = obj;
    prbname = obj.prb;
    AddButtonOnLeetcode();});

  const AddButtonOnLeetcode = () => {
    const element = document.querySelector(".flex.h-full.flex-row");
    if (element && !divElement) {
      var newLink = document.createElement('a');
      newLink.href = '/problems/'+ prbname + '/videosolutions';
      newLink.id = 'videosolutionsTab';
      divElement = document.createElement('div');
      divElement.className = 'flex h-full select-none items-center whitespace-nowrap text-xs font-medium text-label-2 dark:text-dark-label-2 hover:text-label-1 dark:hover:text-dark-label-1';
      const spanEle = document.createElement('span');
      spanEle.textContent = 'Video Solutions';
      divElement.appendChild(spanEle);
      newLink.appendChild(divElement);
      element.appendChild(newLink);
      console.log("Child got appended");
      const videotabs = document.getElementById('videosolutionsTab');
      videotabs.addEventListener('click', function (event) {
        event.preventDefault();
        videosContainer = document.createElement('div');
        videosContainer.id = 'videosContainer';
        /*
        const  descchild=document.getElementsByClassName("flex h-full w-full overflow-y-auto");
        const desctab = document.getElementsByClassName("relative flex h-full select-none items-center whitespace-nowrap text-xs text-label-1 dark:text-dark-label-1 font-medium hover:text-label-1 dark:hover:text-dark-label-1");
        

        const isdesc=document.contains(descchild);
        desctab.id = "descriptiontab";
        if (isdesc){
          targetArea = descchild;
          originalContent = targetArea.innerHTML;}
        const editorialchild = document.getElementsByClassName("flex h-full w-full w-gap");
        const  editorialtab = document.getElementsByClassName("relative flex h-full select-none items-center whitespace-nowrap text-xs font-medium text-label-2 dark:text-dark-label-2 hover:text-label-1 dark:hover:text-dark-label-1")[0];
        const  iseditorial = document.contains(editorialchild);
        editorialtab.id ="editorialtab";
        if(editorialtab){
          console.log("it is there");
        }
        if(iseditorial){
          targetArea = editorialchild;
          originalContent = targetArea.innerHTML;
        }
        const solutionschild = document.querySelector('.flex.h-full.w-full.flex-col.overflow-auto.bg-layer-1.dark\\:bg-dark-layer-1');
        const issolution = document.contains(solutionschild);
        const solutiontab = document.getElementsByClassName("relative flex h-full select-none items-center whitespace-nowrap text-xs font-medium text-label-2 dark:text-dark-label-2 hover:text-label-1 dark:hover:text-dark-label-1")[1];
        
        solutiontab.id = "solutiontab";
        if (issolution) {
          targetArea = solutionschild;
          originalContent = targetArea.innerHTML;
        }
        const submissionschild = document.querySelector('.bg-layer-1.dark\\:bg-dark-layer-1.flex.h-full.w-full.flex-col.overflow-auto');
        const issubmission = document.contains(submissionschild);
        const submissiontab = document.getElementsByClassName("relative flex h-full select-none items-center whitespace-nowrap text-xs font-medium text-label-2 dark:text-dark-label-2 hover:text-label-1 dark:hover:text-dark-label-1")[2];
        submissiontab.id = "submissionstab";
        if (issubmission) {
          targetArea = submissionschild;
          originalContent = targetArea.innerHTML;
        }*/
        /*const description= document.querySelector("relative flex h-full");
        const getcurrenttab = document.querySelector(".bg-layer-2");
        const desc=document.getElementsByClassName("flex h-full w-full overflow-y-auto");
        const edit=document.getElementsByClassName("h-full w-full")[4];
        const solut=document.getElementsByClassName("flex h-full w-full flex=col overflow-auto");
        const sub=document.getElementsByClassName("flex h-full w-full !min-w-[585px] flex-col overglow-auto");
        if(desc instanceof Node){
          targetArea = desc;
          originalContent =targetArea.innerHTML;
        }
         if(edit instanceof Node){
        targetArea = edit;
        originalContent =targetArea.innerHTML;
        }
        if(solut instanceof Node){
      targetArea = solut;
      originalContent =targetArea.innerHTML;
       }
       if(sub instanceof Node){
      targetArea = sub;
      originalContent =targetArea.innerHTML;
        }*/
/*
        const getdesctag = document.querySelector('a[href=/problems/'+ str +'/description');
        const getedictag = document.querySelector('a[href=/problems/'+ str +'/editorial');
        const getsubtag = document.querySelector('a[href=/problems/'+ str +'/submissions');
        const getsoluttag = document.querySelector('a[href=/problems/'+ str +'/solutions');
        
        desc=document.getElementsByClassName("flex h-full w-full overflow-y-auto");
        const edit=document.getElementsByClassName("h-full w-full")[4];
        const solut=document.getElementsByClassName("flex h-full w-full flex=col overflow-auto");
        const sub=document.getElementsByClassName("flex h-full w-full !min-w-[585px] flex-col overglow-auto");
        if(desc instanceof Node){
          targetArea = desc;
          originalContent =targetArea.innerHTML;
        }
         if(edit instanceof Node){
        targetArea = edit;
        originalContent =targetArea.innerHTML;
        }
        if(solut instanceof Node){
      targetArea = solut;
      originalContent =targetArea.innerHTML;
       }
       if(sub instanceof Node){
      targetArea = sub;
      originalContent =targetArea.innerHTML;
        }
*/
const getdesctag = document.querySelector('a[href="/problems/' + prbname + '/description"]');
const getedictag = document.querySelector('a[href="/problems/' + prbname + '/editorial"]');
var getsubtag = document.querySelector('a[href="/problems/' + prbname + '/submissions"]');
var getsoluttag = document.querySelector('a[href="/problems/' + prbname + '/solutions"]');
const  getdesctab= document.querySelector('.flex .h-full .w-full .overflow-y-auto');
var getmaintab = document.querySelector(".flex.h-full.w-full.overflow-y-auto.rounded-b");
const getedictab= document.getElementsByClassName("h-full w-full")[4];
var getsolutab= document.getElementsByClassName("flex h-full w-full flex-col overflow-auto");
var getsubtab=document.getElementsByClassName("flex h-full w-full flex-col overflow-auto");
var getsubsubtab=document.getElementsByClassName("h-full px-4");
 var videoContainer = document.createElement('div');
              videoContainer.className = 'video-container';
              var videosContainer = document.createElement('div');
              videosContainer.className = 'videoscontainer'

  if(getdesctab){
    targetArea=getdesctab;
    originalContent=targetArea.innerHTML;
  }
  if(getedictab){
    targetArea=getedictab;
    originalContent=targetArea.innerHTML;
  }
 chrome.runtime.sendMessage({
          command: "fetch",
          data: {prbname}
        }, response =>{
          if (response && response.status === 'success') {
            
            const results = response.data;
            let index=0;
            results.forEach(video => {
              const videoURL = `https://www.youtube.com/watch?v=${video.videoId}`;
              
              const durationSpan = document.createElement('span');
              durationSpan.textContent = video.duration;
              durationSpan.className = 'video-duration';
              if (index === 0) {
                videoContainer.style.marginTop = '20px'; 
                index++;
              }
              videoContainer.innerHTML += `
                       <div style="margin-bottom: 55px; display: flex; flex-direction: column; justify-content: center;">
             <div style="display: flex;">
                     <div style="width: 320px; height: 180px; margin-bottom: 11px; padding-left: 10px;">
                 <iframe src="https://www.youtube.com/embed/${video.videoId}" width="320" height="200" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div style="display: flex; flex-direction: column; margin-left: 20px;">
                    <span style="margin-bottom: 5px;">by <a href="${videoURL}" target="_blank">${video.channelName}</a></span>
                        <a href="${videoURL}" target="_blank" style="max-width: 140px;">
                        <div class="youtube-watch">
                            Watch on YouTube
                          </div>
                      </a>
                   </div>
                    </div>
               </div>
                `;
              videosContainer.appendChild(videoContainer);
               
            
            });
            targetArea.innerHTML=' ';
            targetArea.appendChild(videoContainer);
            getdesctag.addEventListener('click',function(){
              targetArea.innerHTML=originalContent;
            })
            getedictag.addEventListener('click',function(){
              targetArea.innerHTML=originalContent;
            })
/*
           if(getdesctab){
                getdesctab.innerHTML=' ';
                getdesctab.appendChild(videosContainer);
           }else if(getedictab){
             getedictab.innerHTML= ' ';
             getedictab.appendChild(videosContainer);
          }
      getdesctag.addEventListener('click', function() {
              videosContainer.style.zIndex='-1';
              getdesctab.style.zIndex= '1';});
          getedictag.addEventListener('click', function() {
            videosContainer.style.zIndex='-1';
            getedictab.style.zIndex= '1';});
          getsoluttag.addEventListener('click', function() {
            videosContainer.style.zIndex='-1';
            getsolutab.style.zIndex= '1';});
          getsubtag.addEventListener('click', function() {
            videosContainer.style.zIndex='-1';
            getsubtab.style.zIndex= '1';});
    */
            
            /*
            targetArea.innerHTML = '';
            targetArea.appendChild(videosContainer);
            const descriptiontab = document.getElementById('descriptiontab');
            const solutiontab = document.getElementById('solutiontab');
            const submissiontab = document.getElementById('submissionstab');
            const editorialtab = document.getElementById('editorialtab');
            if (descriptiontab) {
              descriptiontab.addEventListener('click', () => {
                targetArea.innerHTML = originalContent;
              });
            }
            if(editorialtab){
              editorialtab.addEventListener('click' , () => {
                targetArea.innerHTML = originalContent;
              });
            }
            if (solutiontab) {
              solutiontab.addEventListener('click', () => {
                targetArea.innerHTML = originalContent;
              });
            }

            if (submissiontab){
              submissiontab.addEventListener('click', () => {
                targetArea.innerHTML = originalContent;
              });
            }*/
        }else {
            console.log('Did not receive any response');
            console.log(response && response.data);
        }
        })
        
      });
      
      getdesctag.addEventListener('click',function(){
        targetArea.innerHTML=originalContent;
      })
      getedictag.addEventListener('click',function(){
        targetArea.innerHTML=originalContent;
      })

      /*
      if(editorialtab) {
        editorialtab.addEventListener('click', () => {
          targetArea.innerHTML = originalContent;
        });
      }

      if (descriptiontab) {
        descriptiontab.addEventListener('click', () => {
          targetArea.innerHTML = originalContent;
        });
      }

      if (solutiontab) {
        solutiontab.addEventListener('click', () => {
          targetArea.innerHTML = originalContent;
        });
      }

      if (submissiontab) {
        submissiontab.addEventListener('click', () => {
          targetArea.innerHTML = originalContent;
        });
      }
      */
    /*
      getdesctag.addEventListener('click', function() {
        targetArea.innerHTML=originalContent;
        
        
    });
    
    getedictag.addEventListener('click', function() {
        targetArea.innerHTML=originalContent;
       
    });
    
    getsoluttag.addEventListener('click', function() {
         targetArea.innerHTML=originalContent;
        
    });
    
    getsubtag.addEventListener('click', function() {
        targetArea.innerHTML=originalContent;
       
    });
    */
    
  }else {
      setTimeout(AddButtonOnLeetcode, 100);
    }
  };
})();
