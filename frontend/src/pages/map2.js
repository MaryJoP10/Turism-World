import "../styles/styles.css";
import { VectorMap } from "react-jvectormap";
import { useRef } from "react";

const Map2 = () => {
    const mapRef = useRef();
    return (
      <div className="world">
        <h1>Opción 2</h1>
        <div style={{width: 500, height: 500}}>
            <VectorMap ref={mapRef} map={"world_mill"}
            />
        </div>


        {/*<div className="world-container">
          <VectorMap
            ref={mapRef}
            // zoomOnScroll={false}
            zoomButtons={false}
            map={"world_mill"}
            backgroundColor="transparent"
            containerStyle={{
              width: "100%",
              height: "1000px"
            }}
            /*markerStyle={{
              initial: {
                fill: "#fff",
                stroke: "#383f47"
              }
            }}*/
            /*containerClassName="map"
            series={{
              //regions: [
                {
                  scale: ["#E2AEFF", "#5E32CA"],
                  attribute: "fill",
                  values: { SG: 100, IN: 100 },
                  normalizeFunction: "polynomial",
                  min: 0,
                  max: 100
                }
              ]
            }}
            /* seri */
            /*markers={[
              {
                //latLng: [1.3521, 103.8198],
                //name: "Singapore"
              }
            ]}*/
            /*regionStyle={{
              initial: {
                fill: "#D1D5DB",
                "fill-opacity": 1,
                stroke: "#265cff",
                "stroke-width": 0,
                "stroke-opacity": 0
              },
              hover: {
                "fill-opacity": 0.8,
                fill: "",
                stroke: "#2b2b2b"
              },
              selected: {
                fill: "#FFFB00"
              }
            }}
            // onMarkerTipShow={function (event, label, index) {
            //   label.html(
            //     '<div style="background-color: white; border: 1px solid; min-height: 100px; max-width: 250px">' +
            //       "<b style='color: red;'>" +
            //       "Rsc" +
            //       "</b><br/>" +
            //       "<b>Population:</b>" +
            //       "test" +
            //       "</br>" +
            //       "<b>Unemployment rate: </b>" +
            //       "kay" +
            //       "%" +
            //       "</div>"
            //   );
            // }}
            onRegionTipShow={function (event, label, code, ...props) {
              console.log("-----> ", label.html(), event, label, code, props);
              label.html(
                '<div style="background-color: white; border: 1px solid white; outline: 10px solid white; border-radius: 5px; min-height: 70px; width: 150px; color: black"; padding-left: 10px>' +
                  "<p>" +
                  "<b>" +
                  label.html() +
                  "</b>" +
                  "</p>" +
                  "<p>" +
                  "Count: " +
                  "<b> Count</b>" +
                  "</p>" +
                  "</div>"
              );
            }}
            // regions={[
            //   {
            //     scale: {
            //       red: "#ff0000",
            //       green: "#00ff00"
            //     },
            //     attribute: "fill",
            //     values: {
            //       "US-KS": "red",
            //       "US-MO": "red",
            //       "US-IA": "green",
            //       "US-NE": "green"
            //     },
            //     legend: {
            //       horizontal: true,
            //       title: "Color"
            //     }
            //   }
            // ]}
          />
        </div>*/}
      </div>
    );
    
}
export default Map2;