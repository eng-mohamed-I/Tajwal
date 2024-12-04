import style from "./page.module.css";

export default function Home() {
  let countries = [
    "اسم الدولة",
    "اسم الدولة",
    "اسم الدولة",
    "اسم الدولة",
    "اسم الدولة",
    "اسم الدولة",
    "اسم الدولة",
    "اسم الدولة",
    "اسم الدولة",
    "اسم الدولة",
    "اسم الدولة",
    "اسم الدولة",
    "اسم الدولة",
    "اسم الدولة",
    "اسم الدولة",
    "اسم الدولة",
  ];

  return (
    <>
      <div className="container-fuild bg-light">
        <div className="container pt-5 pb-3">
          <div className="row">
            {countries.map((country, index) => (
              <div
                key={index}
                className={`col-lg-3 col-md-6 col-sm-12 mb-4 gap-2${style.card}`}
              >
                <div
                  role="button"
                  className={`d-flex justify-content-between align-items-center shadow-sm rounded-1 text-center gap-2 py-2 px-3 bg-white text-dark  `}
                >
                  <div className="text-cemter d-flex gap-2">
                    <div>
                      <img
                        className="rounded-1"
                        src="https://via.placeholder.com/20"
                        alt={`${country} placeholder`}
                      />
                    </div>
                    <div>{country}</div>
                  </div>

                  <i class="fa-solid fa-angle-left"></i>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              className={`${style.showMoreBtn}  py-2 px-5 rounded-1 mt-4`}
            >
              <small role="button" className="text-light">
                عرض جميع الدول
              </small>
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-3 mb-3">
        <div className="container">
          <p className="text-secondary">كيف تستخدم “تجوال”</p>
          <div className="row m-5">
            <div className="col-lg-3 text-center">
              <img className="rounded-1" src="Group.png" alt="phone picture" />
              <p className="text-secondary fw-bold">حمل التطبيق</p>
            </div>
            <div className="col-lg-3 text-center">
              <img
                className="rounded-1"
                src="Layer_1.png"
                alt="phone picture"
              />
              <p className="text-secondary fw-bold">اختر الواجهة والباقة</p>
            </div>
            <div className="col-lg-3 text-center">
              <img
                className="rounded-1"
                src="Group (1).png"
                alt="phone picture"
              />
              <p className="text-secondary fw-bold">ثبت الشريحة</p>
            </div>
            <div className="col-lg-3 text-center">
              <img className="rounded-1" src="Frame.png" alt="phone picture" />
              <p className="text-secondary fw-bold"> استمتع بالباقة</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
