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
                  className={`d-flex justify-content-center align-items-center shadow-sm rounded-1 text-center gap-2 py-2 px-3 bg-white `}
                >
                  <div>{country}</div>
                  <div>
                    <img
                      className="rounded-1"
                      src="https://via.placeholder.com/20"
                      alt={`${country} placeholder`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <small
              role="button"
              className=" py-2 px-5 bg-dark text-light rounded-1 mt-4"
            >
              عرض جميع الدول
            </small>
          </div>
          <div></div>
        </div>
      </div>
      <div className="container-fluid mt-3 mb-3">
        <div className="container">
          <p className="text-dark">"كيف تستخدم تجوال</p>
          <div className="row m-5">
            <div className="col-lg-3">
              <img
                className="rounded-1"
                src="https://via.placeholder.com/200x400"
                alt="phone picture"
              />
            </div>{" "}
            <div className="col-lg-3">
              <img
                className="rounded-1"
                src="https://via.placeholder.com/200x400"
                alt="phone picture"
              />
            </div>{" "}
            <div className="col-lg-3">
              <img
                className="rounded-1"
                src="https://via.placeholder.com/200x400"
                alt="phone picture"
              />
            </div>{" "}
            <div className="col-lg-3">
              <img
                className="rounded-1"
                src="https://via.placeholder.com/200x400"
                alt="phone picture"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
