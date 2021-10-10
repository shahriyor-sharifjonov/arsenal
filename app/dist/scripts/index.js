"use strict";var headerButton=document.querySelector(".header__button"),body=document.querySelector("body"),headerMenu=document.querySelector(".header__menu"),menuOpened=!1,menuToggle=function(){menuOpened=!menuOpened,headerButton.classList.toggle("open"),headerMenu.classList.toggle("open")};headerButton.onclick=menuToggle,window.onclick=function(a){!menuOpened||a.composedPath().includes(headerButton)||a.composedPath().includes(headerMenu)||menuToggle(),a.target.classList.contains("header__link")&&menuToggle(),a.target.classList.contains("popup")&&(a.target.classList.remove("active"),body.classList.remove("ov-hidden"))};function closePopup(){document.querySelector(".popup").classList.remove("active"),body.classList.remove("ov-hidden")}function openPopup(){document.querySelector(".popup").classList.add("active"),body.classList.add("ov-hidden")}$(document).ready(function(){$(".set > button").on("click",function(){$(this).hasClass("active")?($(this).removeClass("active"),$(this).siblings(".content").slideUp(200),$(".set > button i").removeClass("fa-minus").addClass("fa-plus")):($(".set > button i").removeClass("fa-minus").addClass("fa-plus"),$(this).find("i").removeClass("fa-plus").addClass("fa-minus"),$(".set > button").removeClass("active"),$(this).addClass("active"),$(".content").slideUp(200),$(this).siblings(".content").slideDown(200))})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbImhlYWRlckJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJvZHkiLCJoZWFkZXJNZW51IiwibWVudU9wZW5lZCIsIm1lbnVUb2dnbGUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJvbmNsaWNrIiwid2luZG93IiwiZSIsImNvbXBvc2VkUGF0aCIsImluY2x1ZGVzIiwidGFyZ2V0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJjbG9zZVBvcHVwIiwib3BlblBvcHVwIiwiYWRkIiwiJCIsInJlYWR5Iiwib24iLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwic2libGluZ3MiLCJzbGlkZVVwIiwiYWRkQ2xhc3MiLCJmaW5kIiwic2xpZGVEb3duIl0sIm1hcHBpbmdzIjoiZ0JBQ01BLENBQUFBLFlBQVksQ0FBc0JDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIsQyxDQUNsQ0MsSUFBSSxDQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQyxDQUNQRSxVQUFVLENBQXFCSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQyxDQUNqQ0csVUFBVSxHLENBQ1JDLFVBQVUsQ0FBRyxVQUFLLENBQ3RCRCxVQUFVLENBQUcsQ0FBQ0EsVUFEUSxDQUV0QkwsWUFBWSxDQUFDTyxTQUFiLENBQXVCQyxNQUF2QixDQUE4QixNQUE5QixDQUZzQixDQUd0QkosVUFBVSxDQUFDRyxTQUFYLENBQXFCQyxNQUFyQixDQUE0QixNQUE1QixDQUNELEMsQ0FFRFIsWUFBWSxDQUFDUyxPQUFiLENBQXVCSCxVLENBRXZCSSxNQUFNLENBQUNELE9BQVAsQ0FBaUIsU0FBQ0UsQ0FBRCxDQUFXLENBQ3RCLENBQUFOLFVBQVUsRUFBS00sQ0FBQyxDQUFDQyxZQUFGLEdBQWlCQyxRQUFqQixDQUEwQmIsWUFBMUIsQ0FBZixFQUEyRFcsQ0FBQyxDQUFDQyxZQUFGLEdBQWlCQyxRQUFqQixDQUEwQlQsVUFBMUIsQ0FEckMsRUFFeEJFLFVBQVUsRUFGYyxDQUl2QkssQ0FBQyxDQUFDRyxNQUFGLENBQVNQLFNBQVQsQ0FBbUJRLFFBQW5CLENBQTRCLGNBQTVCLENBSnVCLEVBS3hCVCxVQUFVLEVBTGMsQ0FPdkJLLENBQUMsQ0FBQ0csTUFBRixDQUFTUCxTQUFULENBQW1CUSxRQUFuQixDQUE0QixPQUE1QixDQVB1QixHQVF4QkosQ0FBQyxDQUFDRyxNQUFGLENBQVNQLFNBQVQsQ0FBbUJTLE1BQW5CLENBQTBCLFFBQTFCLENBUndCLENBU3hCYixJQUFJLENBQUNJLFNBQUwsQ0FBZVMsTUFBZixDQUFzQixXQUF0QixDQVR3QixDQVczQixDLENBRUQsUUFBU0MsQ0FBQUEsVUFBVCxFQUFtQixDQUNqQmhCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixFQUFpQ0ssU0FBakMsQ0FBMkNTLE1BQTNDLENBQWtELFFBQWxELENBRGlCLENBRWpCYixJQUFJLENBQUNJLFNBQUwsQ0FBZVMsTUFBZixDQUFzQixXQUF0QixDQUNELENBRUQsUUFBU0UsQ0FBQUEsU0FBVCxFQUFrQixDQUNoQmpCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixFQUFpQ0ssU0FBakMsQ0FBMkNZLEdBQTNDLENBQStDLFFBQS9DLENBRGdCLENBRWhCaEIsSUFBSSxDQUFDSSxTQUFMLENBQWVZLEdBQWYsQ0FBbUIsV0FBbkIsQ0FDRCxDQUdEQyxDQUFDLENBQUNuQixRQUFELENBQUQsQ0FBWW9CLEtBQVosQ0FBa0IsVUFBQSxDQUNoQkQsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkUsRUFBbkIsQ0FBc0IsT0FBdEIsQ0FBK0IsVUFBQSxDQUN6QkYsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRRyxRQUFSLENBQWlCLFFBQWpCLENBRHlCLEVBRTNCSCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLFdBQVIsQ0FBb0IsUUFBcEIsQ0FGMkIsQ0FHM0JKLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FDR0ssUUFESCxDQUNZLFVBRFosRUFFR0MsT0FGSCxDQUVXLEdBRlgsQ0FIMkIsQ0FNM0JOLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQ0dJLFdBREgsQ0FDZSxVQURmLEVBRUdHLFFBRkgsQ0FFWSxTQUZaLENBTjJCLEdBVTNCUCxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUNHSSxXQURILENBQ2UsVUFEZixFQUVHRyxRQUZILENBRVksU0FGWixDQVYyQixDQWEzQlAsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUNHUSxJQURILENBQ1EsR0FEUixFQUVHSixXQUZILENBRWUsU0FGZixFQUdHRyxRQUhILENBR1ksVUFIWixDQWIyQixDQWlCM0JQLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJJLFdBQW5CLENBQStCLFFBQS9CLENBakIyQixDQWtCM0JKLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU8sUUFBUixDQUFpQixRQUFqQixDQWxCMkIsQ0FtQjNCUCxDQUFDLENBQUMsVUFBRCxDQUFELENBQWNNLE9BQWQsQ0FBc0IsR0FBdEIsQ0FuQjJCLENBb0IzQk4sQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUNHSyxRQURILENBQ1ksVUFEWixFQUVHSSxTQUZILENBRWEsR0FGYixDQXBCMkIsQ0F3QjlCLENBeEJELENBeUJELENBMUJELEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIZWFkZXIgTWVudVxyXG5jb25zdCBoZWFkZXJCdXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2J1dHRvblwiKTtcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5jb25zdCBoZWFkZXJNZW51OiBIVE1MVUxpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX21lbnVcIik7XHJcbmxldCBtZW51T3BlbmVkID0gZmFsc2U7XHJcbmNvbnN0IG1lbnVUb2dnbGUgPSAoKSA9PiB7XHJcbiAgbWVudU9wZW5lZCA9ICFtZW51T3BlbmVkO1xyXG4gIGhlYWRlckJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICBoZWFkZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG59O1xyXG5cclxuaGVhZGVyQnV0dG9uLm9uY2xpY2sgPSBtZW51VG9nZ2xlO1xyXG5cclxud2luZG93Lm9uY2xpY2sgPSAoZTogYW55KSA9PiB7XHJcbiAgaWYgKG1lbnVPcGVuZWQgJiYgIWUuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXMoaGVhZGVyQnV0dG9uKSAmJiAhZS5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyhoZWFkZXJNZW51KSl7IFxyXG4gICAgbWVudVRvZ2dsZSgpO1xyXG4gIH1cclxuICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRlcl9fbGluaycpKXtcclxuICAgIG1lbnVUb2dnbGUoKVxyXG4gIH1cclxuICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwJykpe1xyXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb3YtaGlkZGVuJylcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjbG9zZVBvcHVwKCl7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ292LWhpZGRlbicpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5Qb3B1cCgpe1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgYm9keS5jbGFzc0xpc3QuYWRkKCdvdi1oaWRkZW4nKVxyXG59XHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgJChcIi5zZXQgPiBidXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICQodGhpcylcclxuICAgICAgICAuc2libGluZ3MoXCIuY29udGVudFwiKVxyXG4gICAgICAgIC5zbGlkZVVwKDIwMCk7XHJcbiAgICAgICQoXCIuc2V0ID4gYnV0dG9uIGlcIilcclxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJmYS1taW51c1wiKVxyXG4gICAgICAgIC5hZGRDbGFzcyhcImZhLXBsdXNcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKFwiLnNldCA+IGJ1dHRvbiBpXCIpXHJcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiZmEtbWludXNcIilcclxuICAgICAgICAuYWRkQ2xhc3MoXCJmYS1wbHVzXCIpO1xyXG4gICAgICAkKHRoaXMpXHJcbiAgICAgICAgLmZpbmQoXCJpXCIpXHJcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiZmEtcGx1c1wiKVxyXG4gICAgICAgIC5hZGRDbGFzcyhcImZhLW1pbnVzXCIpO1xyXG4gICAgICAkKFwiLnNldCA+IGJ1dHRvblwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgJChcIi5jb250ZW50XCIpLnNsaWRlVXAoMjAwKTtcclxuICAgICAgJCh0aGlzKVxyXG4gICAgICAgIC5zaWJsaW5ncyhcIi5jb250ZW50XCIpXHJcbiAgICAgICAgLnNsaWRlRG93bigyMDApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuIl19
