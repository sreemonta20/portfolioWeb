// import * as $ from 'jquery';
export class conversions {
  constructor() { }

  JsonStringify(models: any): string {
      var smodel = '';
      if (models.length !== undefined) {
          if (models.length > 1) {
              for (var i = 0; i < models.length; i++) {
                  if (i == 0) {
                      smodel += "[" + JSON.stringify(models[i]) + ",";
                  }
                  else if (i == (models.length - 1)) {
                      smodel += JSON.stringify(models[i]) + "]";
                  }
                  else {
                      smodel += JSON.stringify(models[i]) + ",";
                  }
              }
          }
          else {
              smodel = "[" + JSON.stringify(models[0]) + "]";
          }
      }
      else {
          smodel = "[" + JSON.stringify(models) + "]";
      }
      return smodel;
  }

  JsonStringifyExtn(models: any): string {
    let smodel = '';
    if (models.length !== undefined) {
        if (models.length > 1) {
            for (let i = 0; i < models.length; i++) {
                if (i === 0) {
                    smodel += '[' + JSON.stringify(models[i]) + ',';
                }
                else if (i === (models.length - 1)) {
                    smodel += JSON.stringify(models[i]) + ']';
                }
                else {
                    smodel += JSON.stringify(models[i]) + ',';
                }
            }
        }
        else {
            smodel = '[' + JSON.stringify(models[0]) + ']';
        }
    }
    else {

        smodel = '[' + JSON.stringify(models) + ']';
    }
    return smodel;
}

  CalculateDateDifference(event?: any, startDate?: any){
    let startdate = new Date(startDate);
    let enddate = new Date(event.target.value);
    let diffIntime = enddate.getTime() - startdate.getTime();
    let diffindays = Math.floor(diffIntime / (1000 * 3600 * 24));
    return diffindays.toString() + ' ' + 'Days'.toString();
  }

  SetUntouchPristine(form: any) {
      form.markAsUntouched();
      form.markAsPristine();
  }

  Today() {
      var date = new Date();
      var Nowdate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
      return Nowdate;
  }

  TodayHHmmss() {
      var date = new Date();
      var nowDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
      var nowTime = ('0' + (date.getHours())).slice(-2) + ':' + ('0' + (date.getMinutes())).slice(-2) + ':' + ('0' + date.getSeconds()).slice(-2);
      return nowDate + 'T' + nowTime;
  }

  TodayHHmm() {
      var date = new Date();
      var nowDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
      var nowTime = ('0' + (date.getHours())).slice(-2) + ':' + ('0' + (date.getMinutes())).slice(-2);
      return nowDate + 'T' + nowTime;
  }

  AddDayMonthYear(date: string, day: any, month: any, year: any) {
      var ndate = new Date(date);
      var incYear = new Date(ndate.setFullYear(ndate.getFullYear() + year));
      var incMonth = new Date(incYear.setMonth(incYear.getMonth() + month));
      var incdate = new Date(incMonth.setDate(incMonth.getDate() + day));
      var newdate = incdate.getFullYear() + '-' + ('0' + (incdate.getMonth() + 1)).slice(-2) + '-' + ('0' + incdate.getDate()).slice(-2);
      return newdate;
  }

  DeductDayMonthYear(date: string, day: any, month: any, year: any) {
      var ndate = new Date(date);
      var incYear = new Date(ndate.setFullYear(ndate.getFullYear() - year));
      var incMonth = new Date(incYear.setMonth(incYear.getMonth() - month));
      var incdate = new Date(incMonth.setDate((incMonth.getDate()) - day));
      var newdate = incdate.getFullYear() + '-' + ('0' + (incdate.getMonth() + 1)).slice(-2) + '-' + ('0' + incdate.getDate()).slice(-2);
      return newdate;
  }

  FinancialYearStart() {
      var date = new Date();
      var Nowdate = date.getFullYear() + '-' + '04' + '-' + '01';
      return Nowdate;
  }

  FinancialYearEnd() {
      var date = new Date();
      var Nowdate = (date.getFullYear() + 1) + '-' + '03' + '-' + '31';
      return Nowdate;
  }

  GetAWeekDay(inputDate: string) {
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var fulldate = new Date(inputDate);
      var dayName = days[fulldate.getDay()];
      return dayName;
  }
  GetAMonthName(inputDate: string) {
      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var fulldate = new Date(inputDate);
      var MonthName = months[fulldate.getMonth()];
      return MonthName;
  }
  DateConvert(dt: any) {
      var rdt = dt.split('T');
      return rdt[0];
  }

  Focus(elementId: any) {
      $('#' + elementId + '').focus();
  }

  Focus_Delay(elementId: any, time: any) {
      setTimeout(() => { $('#' + elementId + '').focus(); }, time);
  }

  ModalFocus(modalid: any, elementId: any) {
      $('#' + modalid + '').on('shown.bs.modal', function () {
          $(this).find('#' + elementId + '').focus();
      });
  }

  ModalFocusWithBackColor(modalid: any, elementId: any, color: any) {
      $('#' + modalid + '').on('shown.bs.modal', function () {
          $('#' + elementId + '').focus();
          $('#' + elementId + '').css({ backgroundColor: color });
      });
  }

  FocusWithBackColor(elementId: any, color: any) {
      $('#' + elementId + '').focus();
      $('#' + elementId + '').css({ backgroundColor: color });
  }

  SetBackColor(elementId: any, color: any) {
      $('#' + elementId + '').css({ backgroundColor: color });
  }

  // ModalShow(modalid) {
  //     $('#' + modalid + '').model('show');
  // }

  // ModalShowAndFocus(modalid, elementId) {
  //     this.ModalShow(modalid);
  //     this.ModalFocus(modalid, elementId);
  // }

  // ModalShowNoDrop(modalid) {
  //     $('#' + modalid + '').modal({ show: true, backdrop: 'static', keyboard: false });
  // }

  // ModalShowDelay(modalid, time) {
  //     setTimeout(() => {
  //         $('#' + modalid + '').modal('show');
  //     }, time);
  // }

  // ModalHide(modalid) {
  //     $('#' + modalid + '').modal('hide');
  // }

  Disable(elementid: any) {
      $('#' + elementid + '').attr("disabled", "disabled");
  }

  Enalble(elementid: any) {
      $('#' + elementid + '').removeAttr('disabled');
  }

  Delay_Disable(elementid: any, time: any) {
      setTimeout(() => {
          $('#' + elementid + '').attr("disabled", "disabled");
      }, time);
  }

  Delay_Enalble(elementid: any, time: any) {
      setTimeout(() => {
          $('#' + elementid + '').removeAttr('disabled');
      }, time);
  }

  Disable_con(elementid: any, frstcon: any, scndcon: any) {
      if (frstcon === scndcon) {
          $('#' + elementid + '').attr("disabled", "disabled");
      }
  }

  Enalble_con(elementid: any, frstcon: any, scndcon: any) {
      if (frstcon === scndcon) {
          $('#' + elementid + '').removeAttr('disabled');
      }
  }

  Delay_Disable_con(elementid: any, time: any, frstcon: any, scndcon: any) {
      if (frstcon === scndcon) {
          setTimeout(() => {
              $('#' + elementid + '').attr("disabled", "disabled");
          }, time);
      }
  }

  Delay_Enalble_con(elementid: any, time: any, frstcon: any, scndcon: any) {
      if (frstcon === scndcon) {
          setTimeout(() => {
              $('#' + elementid + '').removeAttr('disabled');
          }, time);
      }
  }

  clickfunc(elementid: any) {
      setTimeout(() => {
          $(elementid).click();
      }, 0);
  }

  progressInterval(elementId: any, ttlTime: any, width: any) {
      var elem = document.getElementById(elementId) as  HTMLElement;
      var intervalTime = (ttlTime / 100);
      var id = setInterval(frame, intervalTime);
      function frame() {
          if (width >= 100) {
              clearInterval(id);
          } else {
              width++;
              elem.style.width = width + '%';
              elem.innerHTML = width + '%';
          }
      }
  }

  loadScripts() {
      const libScripts = [
        'assets/updated_lib/js/jquery.min.js',
        'assets/updated_lib/js/bootstrap.min.js',
        'assets/updated_lib/js/fakeLoader.min.js',
        'assets/updated_lib/js/owl.carousel.min.js',
        'assets/updated_lib/js/jquery.filterizr.min.js',
        'assets/updated_lib/js/imagesloaded.pkgd.min.js',
        'assets/updated_lib/js/jquery.magnific-popup.min.js',
        'assets/js/contact-form.js',
        'assets/js/main.js'
      ];

      var tags = document.getElementsByTagName('theme-script')[0];
      if (tags.childNodes.length > 0) {
          var nodeLength = tags.childNodes.length;
          var nodeIndex = tags.childNodes.length - 1;
          for (nodeIndex; nodeIndex < nodeLength; nodeIndex--) {
              if (nodeIndex < 0) {
                  break;
              }
              else {
                  tags.removeChild(tags.childNodes[nodeIndex]);
              }
              nodeLength -= 1;
          }
      }

      for (let i = 0; i < libScripts.length; i++) {
          const node = document.createElement('script');
          node.src = libScripts[i];
          node.type = 'text/javascript';
          node.async = false;
          node.charset = 'utf-8';
          document.getElementsByTagName('theme-script')[0].appendChild(node);
      }
  }
  IsNullEmptyUndefined(value: any) {
    return (!value || value === undefined || value === '' || value.length === 0);
}
}
