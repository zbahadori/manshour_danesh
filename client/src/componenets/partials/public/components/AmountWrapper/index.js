import React from "react";
import AmountWrapperItems from "./AmountWrapperItems";
function AmountWrapper() {
  return (
    <section className="amount-wrapper">
      <div className="container">
        <div className="row">
          <AmountWrapperItems
            title="کلاس های آنلاین"
            sub_title1="کلاس ریاضی ۳"
            description1="استاد منشور دانش"
            btn_link1="#"
            sub_title2="کلاس علوم 12"
            description2="استاد منشور دانش"
            btn_link2="#"
          ></AmountWrapperItems>
          <AmountWrapperItems
            title="دانش آموزان"
            sub_title1="مجموع ثبت نام ها"
            count1="۵,۱۲۳"
            sub_title2="افراد آنلاین"
            count2="۳۰۷"
          ></AmountWrapperItems>
          <AmountWrapperItems
            title="کلاس های آنلاین"
            sub_title1="کلاس ریاضی ۳"
            description1="استاد منشور دانش"
            btn_link1="#"
            sub_title2="کلاس علوم 12"
            description2="استاد منشور دانش"
            btn_link2="#"
          ></AmountWrapperItems>
        </div>
      </div>
    </section>
  );
}
export default AmountWrapper;
