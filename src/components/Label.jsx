import React from "react";

export default function Label() {
  const cards = [
    {
      id: "Classic_Card",
      title: "IGECEM",
      subheader: "Nuka-cola",
      descrition: `CAPTURA DE TABLAS DE VALOR`,
      ml: "",
      points: ["Version 1.9", "Beta", "AVG"],
    },
    {
      id: "Quantum_Card",
      title: "Bienvenido a ",
      subheader: "Nuka-cola",
      descrition: `CAPTURA DE TABLAS DE VALOR`,
      ml: "",
      points: ["Version 1.9", "Beta", "AVG"],
    },
    {
      id: "Sunset_Card",
      title: "CTV WEB \n 2025",
      subheader: "IGECEM",
      descrition: `CAPTURA DE TABLAS DE VALOR`,
      ml: "",
      points: ["Version 1.9", "Beta", "AVG"],
    },
  ];

  return (
    <div className={"labels_container"}>
      <div className={"labels_wrapper"}>
        {cards.map((card) => (
          <div id={card.id} key={card.id} className={"label_card label_card--hidden"}>
            <div>
              <h1 className={"text_header"}>{card.title}</h1>
              <p className={"text_subheader"}>{card.subheader}</p>
              <p className={"text_body"}>{card.descrition}</p>
            </div>
            <div>
              <h1 className={"text_subheader"}>{card.ml}</h1>
            </div>
            <div>
              <ul>
                {card.points.map((point, index) => {
                  if (index === card.points.lenght) {
                    return (
                      <li key={index} className='text_item_des'>
                        <p className={"text_body text_item_des text_item_des_border_top text_item_des_border_bottom"}>
                          {point}
                        </p>
                      </li>
                    );
                  } else {
                    return (
                      <li key={index} className={"text_body text_item_des text_item_des_border_top"}>
                        <p>{point}</p>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
