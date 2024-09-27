import React from "react";

const About = () => {
  return (
    <div style={{background:"#87ceeb", opacity:0.8,  backgroundRepeat:"no-repeat",backgroundSize:"cover", padding:"40px"}}> 
      <h1 className="text-end  text-white">عنّا</h1>
   <p className="fs-3  text-end">
   في عصر السرعة وضغوط الحياة اليومية، نعلم أن العناية بسيارتك قد تكون مهمة متعبة وتستغرق وقتًا طويلًا. لهذا السبب نقدم لك خدمة غسيل السيارات المتنقلة باستخدام تريبورتور، لتجربة مريحة وسلسة في منزلك أو مكان عملك.
   </p>

     <h2 className="text-end text-white">ما الذي يميزنا؟</h2> 
   <p className="fs-3  text-end">نحن لا نقدم فقط غسيلًا عاديًا للسيارات، بل نسعى لتقديم خدمة متكاملة تمنحك قيمة حقيقية تتجاوز مجرد تنظيف السيارة. نحن نفهم أن سيارتك ليست مجرد وسيلة نقل، بل هي جزء من حياتك اليومية، ولذلك نهدف لجعلها لامعة وجاهزة لتلبية احتياجاتك في أي وقت</p>

   <h2 className="text-end text-white">الراحة والسهولة في متناول يدك</h2>
   <p className="fs-3  text-end">بدلاً من أن تضطر لإضاعة وقتك في الانتظار في محطات الغسيل، نأتي إليك مباشرة باستخدام تريبورتور مجهز بأحدث المعدات والتقنيات التي تضمن تنظيفًا احترافيًا وشاملاً لسيارتك. كل ما عليك فعله هو تحديد الوقت والمكان، وسنكون هناك.</p>
   <h2 className="text-end text-white">القيمة التي تستحقها</h2>
   <p className="fs-3  text-end">نحن لا نغسل سيارتك فقط، بل نقدم لك راحة البال. بفضل فريقنا المدرب باحترافية، نعدك بنتائج مبهرة وبخدمة موثوقة تضيف إلى تجربة القيادة الخاصة بك. نحن ملتزمون بتقديم خدمة تلبي توقعاتك وتحقق الرضا الكامل.</p>
<div className="container">
    <div className="row">
        <div className="col-lg-6">
            <img className="w-75" src="/assets/profile.jpeg" alt="" />
        </div>
        <div className="col-lg-6">
        <h2 className="text-end text-white" >ماذا نقدم؟
   </h2>
    <ul className="fs-3  text-end">
        <p>غسيل خارجي وداخلي شامل.</p>
        <p>إزالة الأوساخ العنيدة والبقع.</p>
        <p>تلميع وتفصيل السيارة باستخدام أفضل المنتجات.</p>
        <p>خدمات إضافية مثل تنظيف المقاعد والفرش.</p>
    </ul>

    <h2 className="text-end text-white">
    لماذا تختارنا؟
   </h2>
   <p className="fs-3 fw-bold text-end">لأننا نقدم لك:</p>
    <ul className="fs-3  text-end">
        <p>سرعة في التنفيذ دون التضحية بالجودة.</p>
        <p>راحة لن تضطر معها إلى مغادرة منزلك أو مكتبك.</p>
        <p>إتقان يجعل سيارتك تبدو جديدة وكأنها خرجت للتو من الوكالة.</p>
   
    </ul>
 
        </div>
    </div>
</div>
    <p className="fs-3 fw-bold text-info text-light">لا تتردد في الاتصال بنا للاستفادة من تجربة متميزة تلبي احتياجاتك وتفوق توقعاتك!</p>
    
   
    </div>
  );
};

export default About;
