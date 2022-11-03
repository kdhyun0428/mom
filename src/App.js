import React, { useState } from "react";
import "./style.css";
import KakaoMap from "./KakaoMap";
import Header from "./Header";

export default function App() {
  const [visible, setVisible] = useState(true);

  const [markerPositions, setMarkerPositions] = useState([]);
  const markerPositions1 = [
    [35.1585019, 129.0620362],
  ];

  const [mapSize, setMapSize] = useState([900, 350]);

  return (
    <div className="App">
      <Header />
      
      <nav>
        <h2>조은맘 산후조리원 부산 지점</h2>
        <p>조은맘 산후도우미 부산지점은 세상에 태어나 가장고귀한 일을 하신 산모님을 위한 서비스 기업입니다.</p> 
        <p>저희 조은맘은 아가에게 가장 중요한 신생아 시기와 여성에게 가장 중요한 출산기를 엄마와 아기가 건강하고 행복하게 보낼 수 있도록 체계화된 시스템으로 전문적인 산후 관리를 보장합니다.</p> 
        <p>일생에 가장 중요하고 소중한 추억이 되는 시간을 조은맘 산후도우미와 함께 하시는 것에 대해 감사함과 행복감을 느끼며 정성과 사랑으로 보답드릴 것을 약속드립니다.</p>
      </nav>


      <section>
        
      <div id="wrap">
        {visible && (
          <>
            <h2>조은맘 산후조리원</h2>
            <KakaoMap markerPositions={markerPositions} size={mapSize} />
          </>
        )}
      </div>
      </section>
    </div>
  );
}
