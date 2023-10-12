import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

const ResponsiveDiv = styled.div`
  /* 기본 스타일 */
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 10px;

  /* 화면 너비가 768px 이하일 때 스타일 변경 */
  @media (max-width: 768px) {
    /* 요소의 크기나 위치를 조정하는 스타일 */
    width: 90%;
    height: 90%;
    left: 5%;
    top: 5%;
    font-size: 16px;
  }

  /* 화면 너비가 480px 이하일 때 스타일 변경 */
  @media (max-width: 480px) {
    /* 요소의 크기나 위치를 더 작게 조정하는 스타일 */
    width: 80%;
    height: 80%;
    left: 10%;
    top: 10%;
    font-size: 14px;
  }
`;

function App() {
    // 클릭 여부를 나타내는 상태 변수를 정의하고 기본값으로 false를 설정합니다.
    const [isClicked, setIsClicked] = useState(false);

    // 클릭 이벤트를 처리하는 함수를 정의합니다.
    const handlePurchaseClick = () => {
      // 클릭되었음을 나타내는 상태 변수를 true로 업데이트합니다.
      setIsClicked(true);
      alert('구매 버튼이 클릭되었습니다!'); // 클릭 시 경고창을 띄웁니다. 원하는 동작으로 수정할 수 있습니다.
    };
  return (
    <ResponsiveDiv>
      <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
          <div style={{left: 153, top: 43, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Roboto', fontWeight: '600', wordWrap: 'break-word'}}>hyun_dev</div>
          <div style={{width: 16, height: 11.62, left: 56, top: 47.81, position: 'absolute'}}>
              <div style={{width: 16, height: 0, left: 0, top: 0, position: 'absolute', border: '2px #757575 solid'}}></div>
              <div style={{width: 16, height: 0, left: 0, top: 5.81, position: 'absolute', border: '2px #757575 solid'}}></div>
              <div style={{width: 16, height: 0, left: 0, top: 11.62, position: 'absolute', border: '2px #757575 solid'}}></div>
          </div>
          <div style={{width: 36, height: 36, left: 46, top: 36, position: 'absolute', background: 'rgba(0, 0, 0, 0.02)', borderRadius: 8, border: '1px #BEBEBE solid'}}></div>
          <div style={{left: 1189, top: 50, position: 'absolute', opacity: 0.50, color: 'black', fontSize: 12, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>1,150</div>
          <div style={{left: 1259, top: 50, position: 'absolute', color: 'black', fontSize: 12, fontFamily: 'Roboto', fontWeight: '600', wordWrap: 'break-word'}}>상점</div>
          <div style={{left: 1320, top: 49, position: 'absolute', opacity: 0.50, color: 'black', fontSize: 12, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>인벤토리</div>
          <div style={{width: 20, height: 20, left: 1168, top: 46, position: 'absolute'}}>
              <div style={{width: 4.58, height: 4.58, left: 7.71, top: 5.21, position: 'absolute', background: '#848484'}}></div>
              <div style={{width: 11.25, height: 16.59, left: 4.38, top: 1.88, position: 'absolute', background: '#848484'}}></div>
          </div>
          <div style={{width: 20, height: 20, left: 205, top: 305, position: 'absolute'}}>
              <div style={{width: 4.58, height: 4.58, left: 7.71, top: 5.21, position: 'absolute', background: 'black'}}></div>
              <div style={{width: 11.25, height: 16.59, left: 4.38, top: 1.88, position: 'absolute', background: 'black'}}></div>
          </div>
          <div style={{width: 16, height: 11.92, left: 1239, top: 49.66, position: 'absolute'}}>
              <div style={{width: 16, height: 5.56, left: 0, top: 0, position: 'absolute', border: '2px black solid'}}></div>
              <div style={{width: 8, height: 6.36, left: 6.40, top: 5.56, position: 'absolute', border: '2px black solid'}}></div>
              <div style={{width: 0, height: 6.36, left: 1.60, top: 5.56, position: 'absolute', border: '2px black solid'}}></div>
          </div>
          <div style={{width: 14, height: 15.45, left: 1301, top: 47.67, position: 'absolute'}}>
              <div style={{width: 14, height: 11.59, left: 0, top: 3.86, position: 'absolute', border: '1.20px #848484 solid'}}></div>
              <div style={{width: 6.22, height: 6.18, left: 3.89, top: -0, position: 'absolute', border: '1.20px #848484 solid'}}></div>
          </div>
          <div style={{width: 1920, height: 110, left: -240, top: 149, position: 'absolute', background: '#EBEBEB'}} />
          <div style={{left: 213, top: 187, position: 'absolute', color: 'black', fontSize: 28, fontFamily: 'Roboto', fontWeight: '600', wordWrap: 'break-word'}}>상점</div>
          <div style={{width: 1119, height: 240, left: 160, top: 390, position: 'absolute', borderRadius: 10}}>
              <div style={{width: 270, height: 240, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 10, border: '1px #B8B8B8 solid'}} />
              <div style={{width: 270, height: 240, left: 283, top: 0, position: 'absolute', background: 'white', borderRadius: 10, border: '1px #B8B8B8 solid'}}></div>
              <div style={{width: 270, height: 240, left: 566, top: 0, position: 'absolute', background: 'white', borderRadius: 10, border: '1px #B8B8B8 solid'}} />
              <div style={{width: 270, height: 240, left: 849, top: 0, position: 'absolute', background: 'white', borderRadius: 10, border: '1px #B8B8B8 solid'}} />
              <div style={{width: 86, height: 35, left: 140, top: 172, position: 'absolute', background: 'black', borderRadius: 30, border: '1px black solid'}} />
              <div style={{width: 117, height: 16, left: 355, top: 137, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>3,000</div>
              <div style={{width: 230, height: 36, left: 308, top: 104, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>가수 아이유의 AI 보이스</div>
              <div style={{width: 86, height: 35, left: 327, top: 172, position: 'absolute', background: '#D9D9D9', borderRadius: 30, border: '1px #9E9E9E solid'}} />
              <div style={{width: 52, height: 20, left: 344, top: 180, position: 'absolute', color: '#383838', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>상세 설명</div>
              <div style={{width: 86, height: 35, left: 610, top: 172, position: 'absolute', background: '#D9D9D9', borderRadius: 30, border: '1px #9E9E9E solid'}} />
              <div style={{width: 52, height: 20, left: 627, top: 180, position: 'absolute', color: '#383838', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>상세 설명</div>
              <img style={{width: 64, height: 64, left: 956, top: 28, position: 'absolute', borderRadius: 9999}} src="https://via.placeholder.com/64x64" />
              <div style={{width: 117, height: 16, left: 925, top: 137, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>3,000</div>
              <div style={{width: 245, height: 36, left: 860, top: 104, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>가수 성시경의 AI 보이스</div>
              <div style={{width: 86, height: 35, left: 893, top: 172, position: 'absolute', background: '#D9D9D9', borderRadius: 30, border: '1px #9E9E9E solid'}} />
              <div style={{width: 52, height: 20, left: 910, top: 180, position: 'absolute', color: '#383838', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>상세 설명</div>
              <div style={{left: 61, top: 97, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>방문 인사말 보이스</div>
              <div style={{width: 117, height: 16, left: 72, top: 135, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>2,000</div>
              <div style={{width: 86, height: 35, left: 44, top: 172, position: 'absolute', background: '#D9D9D9', borderRadius: 30, border: '1px #9E9E9E solid'}} />
              <div style={{width: 52, height: 20, left: 61, top: 180, position: 'absolute', color: '#383838', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>상세 설명</div>
              <div style={{width: 52, height: 20, left: 157, top: 182, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Roboto', fontWeight: '600', wordWrap: 'break-word'}}>구매하기</div>
              <div style={{width: 86, height: 35, left: 426, top: 172, position: 'absolute', background: 'black', borderRadius: 30, border: '1px black solid'}} />
              <div style={{width: 52, height: 20, left: 443, top: 182, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Roboto', fontWeight: '600', wordWrap: 'break-word'}}>구매하기</div>
              <div style={{width: 86, height: 35, left: 709, top: 172, position: 'absolute', background: 'black', borderRadius: 30, border: '1px black solid'}} />
              <div style={{width: 52, height: 20, left: 726, top: 182, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Roboto', fontWeight: '600', wordWrap: 'break-word'}}>구매하기</div>
              <div style={{width: 117, height: 16, left: 642, top: 137, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>3,000</div>
              <div style={{width: 230, left: 586, top: 104, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>배우 나나의 AI 보이스</div>
              <div style={{width: 86, height: 35, left: 992, top: 172, position: 'absolute', background: 'black', borderRadius: 30, border: '1px black solid'}} />
              <div style={{width: 52, height: 20, left: 1009, top: 182, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Roboto', fontWeight: '600', wordWrap: 'break-word'}}>구매하기</div>
              <div style={{width: 20, height: 20, left: 157, top: 133, position: 'absolute'}}>
                  <div style={{width: 4.58, height: 4.58, left: 7.71, top: 5.21, position: 'absolute', background: 'black'}}></div>
                  <div style={{width: 11.25, height: 16.59, left: 4.38, top: 1.88, position: 'absolute', background: 'black'}}></div>
              </div>
              <div style={{width: 20, height: 20, left: 434, top: 135, position: 'absolute'}}>
                  <div style={{width: 4.58, height: 4.58, left: 7.71, top: 5.21, position: 'absolute', background: 'black'}}></div>
                  <div style={{width: 11.25, height: 16.59, left: 4.38, top: 1.88, position: 'absolute', background: 'black'}}></div>
              </div>
              <div style={{width: 20, height: 20, left: 727, top: 135, position: 'absolute'}}>
                  <div style={{width: 4.58, height: 4.58, left: 7.71, top: 5.21, position: 'absolute', background: 'black'}}></div>
                  <div style={{width: 11.25, height: 16.59, left: 4.38, top: 1.88, position: 'absolute', background: 'black'}}></div>
              </div>
              <div style={{width: 20, height: 20, left: 1010, top: 135, position: 'absolute'}}>
                  <div style={{width: 4.58, height: 4.58, left: 7.71, top: 5.21, position: 'absolute', background: 'black'}}></div>
                  <div style={{width: 11.25, height: 16.59, left: 4.38, top: 1.88, position: 'absolute', background: 'black'}}></div>
              </div>
              <img style={{width: 64, height: 64, left: 386, top: 28, position: 'absolute', borderRadius: 9999}} src="https://via.placeholder.com/64x64" />
              <img style={{width: 64, height: 64, left: 673, top: 28, position: 'absolute', borderRadius: 9999}} src="https://via.placeholder.com/64x64" />
          </div>
          <div style={{width: 1119, height: 240, left: 162, top: 643, position: 'absolute', borderRadius: 10}}>
              <div style={{width: 270, height: 240, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 10, border: '1px #B8B8B8 solid'}} />
              <div style={{width: 86, height: 35, left: 140, top: 172, position: 'absolute', background: 'black', borderRadius: 30, border: '1px black solid'}} />
              <div style={{width: 270, height: 240, left: 283, top: 0, position: 'absolute', background: 'white', borderRadius: 10, border: '1px #B8B8B8 solid'}}></div>
              <div style={{width: 117, height: 16, left: 359, top: 137, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>400</div>
              <div style={{width: 230, height: 36, left: 308, top: 104, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>스트릭 그래프 염색칩 x 5</div>
              <img style={{width: 50.72, height: 50, left: 393, top: 37, position: 'absolute'}} src="https://via.placeholder.com/51x50" />
              <div style={{width: 86, height: 35, left: 327, top: 172, position: 'absolute', background: '#D9D9D9', borderRadius: 30, border: '1px #9E9E9E solid'}} />
              <div style={{width: 52, height: 20, left: 344, top: 180, position: 'absolute', color: '#383838', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>상세 설명</div>
              <div style={{width: 270, height: 240, left: 566, top: 0, position: 'absolute', background: 'white', borderRadius: 10, border: '1px #B8B8B8 solid'}} />
              <div style={{width: 86, height: 35, left: 610, top: 172, position: 'absolute', background: '#D9D9D9', borderRadius: 30, border: '1px #9E9E9E solid'}} />
              <div style={{width: 52, height: 20, left: 627, top: 180, position: 'absolute', color: '#383838', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>상세 설명</div>
              <div style={{width: 270, height: 240, left: 849, top: 0, position: 'absolute', background: 'white', borderRadius: 10, border: '1px #B8B8B8 solid'}} />
              <div style={{width: 117, height: 16, left: 925, top: 137, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>10,000</div>
              <div style={{width: 245, height: 36, left: 861, top: 104, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>「도심의 야경」프로필 배경</div>
              <div style={{width: 86, height: 35, left: 893, top: 172, position: 'absolute', background: '#D9D9D9', borderRadius: 30, border: '1px #9E9E9E solid'}} />
              <div style={{width: 52, height: 20, left: 910, top: 180, position: 'absolute', color: '#383838', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>상세 설명</div>
              <div style={{width: 117, height: 36, left: 76, top: 104, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>스트릭 프리즈</div>
              <div style={{width: 117, height: 16, left: 76, top: 135, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>2,000</div>
              <div style={{width: 86, height: 35, left: 44, top: 172, position: 'absolute', background: '#D9D9D9', borderRadius: 30, border: '1px #9E9E9E solid'}} />
              <div style={{width: 52, height: 20, left: 61, top: 180, position: 'absolute', color: '#383838', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>상세 설명</div>
              <div style={{width: 52, height: 20, left: 157, top: 182, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Roboto', fontWeight: '600', wordWrap: 'break-word'}}>구매하기</div>
              <div style={{width: 86, height: 35, left: 426, top: 172, position: 'absolute', background: 'black', borderRadius: 30, border: '1px black solid'}} />
              <div style={{width: 52, height: 20, left: 443, top: 182, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Roboto', fontWeight: '600', wordWrap: 'break-word'}}>구매하기</div>
              <div style={{width: 86, height: 35, left: 709, top: 172, position: 'absolute', background: 'black', borderRadius: 30, border: '1px black solid'}} />
              <div style={{width: 52, height: 20, left: 726, top: 182, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Roboto', fontWeight: '600', wordWrap: 'break-word'}}>구매하기</div>
              <img style={{width: 52.14, height: 50, left: 109, top: 37, position: 'absolute'}} src="https://via.placeholder.com/52x50" />
              <div style={{width: 117, height: 16, left: 642, top: 137, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>3,000</div>
              <div style={{width: 230, left: 586, top: 104, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>스트릭 그래프 염색칩 x 40</div>
              <img style={{width: 50.72, height: 50, left: 676, top: 35, position: 'absolute'}} src="https://via.placeholder.com/51x50" />
              <img style={{width: 53.36, height: 50, left: 957, top: 35, position: 'absolute'}} src="https://via.placeholder.com/53x50" />
              <div style={{width: 86, height: 35, left: 992, top: 172, position: 'absolute', background: 'black', borderRadius: 30, border: '1px black solid'}} />
              <div style={{width: 52, height: 20, left: 1009, top: 182, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Roboto', fontWeight: '600', wordWrap: 'break-word'}}>구매하기</div>
              <div style={{width: 20, height: 20, left: 161, top: 133, position: 'absolute'}}>
                  <div style={{width: 4.58, height: 4.58, left: 7.71, top: 5.21, position: 'absolute', background: 'black'}}></div>
                  <div style={{width: 11.25, height: 16.59, left: 4.38, top: 1.88, position: 'absolute', background: 'black'}}></div>
              </div>
              <div style={{width: 20, height: 20, left: 434, top: 135, position: 'absolute'}}>
                  <div style={{width: 4.58, height: 4.58, left: 7.71, top: 5.21, position: 'absolute', background: 'black'}}></div>
                  <div style={{width: 11.25, height: 16.59, left: 4.38, top: 1.88, position: 'absolute', background: 'black'}}></div>
              </div>
              <div style={{width: 20, height: 20, left: 727, top: 135, position: 'absolute'}}>
                  <div style={{width: 4.58, height: 4.58, left: 7.71, top: 5.21, position: 'absolute', background: 'black'}}></div>
                  <div style={{width: 11.25, height: 16.59, left: 4.38, top: 1.88, position: 'absolute', background: 'black'}}></div>
              </div>
              <div style={{width: 20, height: 20, left: 1010, top: 135, position: 'absolute'}}>
                  <div style={{width: 4.58, height: 4.58, left: 7.71, top: 5.21, position: 'absolute', background: 'black'}}></div>
                  <div style={{width: 11.25, height: 16.59, left: 4.38, top: 1.88, position: 'absolute', background: 'black'}}></div>
              </div>
          </div>
          <div style={{width: 37, left: 165, top: 304, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>보유</div>
          <div style={{left: 243, top: 304, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Roboto', fontWeight: '600', wordWrap: 'break-word'}}>1,150 점</div>
          <img style={{width: 36, height: 36, left: 102, top: 36, position: 'absolute'}} src="https://via.placeholder.com/36x36" />
          <div style={{width: 32, height: 23.84, left: 170, top: 191, position: 'absolute'}}>
              <div style={{width: 32, height: 11.12, left: 0, top: 0, position: 'absolute', border: '3px black solid'}}></div>
              <div style={{width: 16, height: 12.71, left: 12.80, top: 11.12, position: 'absolute', border: '3px black solid'}}></div>
              <div style={{width: 0, height: 12.71, left: 3.20, top: 11.12, position: 'absolute', border: '3px black solid'}}></div>
          </div>
          <div style={{left: 283, top: 434, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Roboto', fontWeight: '600', lineHeight: 28, wordWrap: 'break-word'}}>^__^</div>
          <div style={{width: 26, height: 26, left: 257, top: 439, position: 'absolute'}}>
              <div style={{width: 20.92, height: 21.94, left: 2.64, top: 2.44, position: 'absolute', background: 'black'}}></div>
          </div>
          <div style={{width: 1119, height: 240, left: 162, top: 900, position: 'absolute', borderRadius: 10}}>
              <div style={{width: 270, height: 240, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 10, border: '1px #B8B8B8 solid'}} />
              <div style={{width: 270, height: 240, left: 283, top: 0, position: 'absolute', background: 'white', borderRadius: 10, border: '1px #B8B8B8 solid'}}></div>
              <div style={{width: 270, height: 240, left: 566, top: 0, position: 'absolute', background: 'white', borderRadius: 10, border: '1px #B8B8B8 solid'}} />
              <div style={{width: 270, height: 240, left: 849, top: 0, position: 'absolute', background: 'white', borderRadius: 10, border: '1px #B8B8B8 solid'}} />
              <div style={{width: 86, height: 35, left: 140, top: 172, position: 'absolute', background: 'black', borderRadius: 30, border: '1px black solid'}} />
              <div style={{width: 117, height: 16, left: 359, top: 137, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>400</div>
              <div style={{width: 230, height: 36, left: 308, top: 104, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>스트릭 그래프 염색칩 x 5</div>
              <img style={{width: 50.72, height: 50, left: 393, top: 37, position: 'absolute'}} src="https://via.placeholder.com/51x50" />
              <div style={{width: 86, height: 35, left: 327, top: 172, position: 'absolute', background: '#D9D9D9', borderRadius: 30, border: '1px #9E9E9E solid'}} />
              <div style={{width: 52, height: 20, left: 344, top: 180, position: 'absolute', color: '#383838', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>상세 설명</div>
              <div style={{width: 86, height: 35, left: 610, top: 172, position: 'absolute', background: '#D9D9D9', borderRadius: 30, border: '1px #9E9E9E solid'}} />
              <div style={{width: 52, height: 20, left: 627, top: 180, position: 'absolute', color: '#383838', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>상세 설명</div>
              <div style={{width: 117, height: 16, left: 925, top: 137, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>10,000</div>
              <div style={{width: 245, height: 36, left: 861, top: 104, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>「도심의 야경」프로필 배경</div>
              <div style={{width: 86, height: 35, left: 893, top: 172, position: 'absolute', background: '#D9D9D9', borderRadius: 30, border: '1px #9E9E9E solid'}} />
              <div style={{width: 52, height: 20, left: 910, top: 180, position: 'absolute', color: '#383838', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>상세 설명</div>
              <div style={{width: 117, height: 36, left: 76, top: 104, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>스트릭 프리즈</div>
              <div style={{width: 117, height: 16, left: 76, top: 135, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>2,000</div>
              <div style={{width: 86, height: 35, left: 44, top: 172, position: 'absolute', background: '#D9D9D9', borderRadius: 30, border: '1px #9E9E9E solid'}} />
              <div style={{width: 52, height: 20, left: 61, top: 180, position: 'absolute', color: '#383838', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>상세 설명</div>
              <div style={{width: 52, height: 20, left: 157, top: 182, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Roboto', fontWeight: '600', wordWrap: 'break-word'}}>구매하기</div>
              <div style={{width: 86, height: 35, left: 426, top: 172, position: 'absolute', background: 'black', borderRadius: 30, border: '1px black solid'}} />
              <div style={{width: 52, height: 20, left: 443, top: 182, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Roboto', fontWeight: '600', wordWrap: 'break-word'}}>구매하기</div>
              <div style={{width: 86, height: 35, left: 709, top: 172, position: 'absolute', background: 'black', borderRadius: 30, border: '1px black solid'}} />
              <div style={{width: 52, height: 20, left: 726, top: 182, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Roboto', fontWeight: '600', wordWrap: 'break-word'}}>구매하기</div>
              <img style={{width: 52.14, height: 50, left: 109, top: 37, position: 'absolute'}} src="https://via.placeholder.com/52x50" />
              <div style={{width: 117, height: 16, left: 642, top: 137, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>3,000</div>
              <div style={{width: 230, left: 586, top: 104, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>스트릭 그래프 염색칩 x 40</div>
              <img style={{width: 50.72, height: 50, left: 676, top: 35, position: 'absolute'}} src="https://via.placeholder.com/51x50" />
              <img style={{width: 53.36, height: 50, left: 957, top: 35, position: 'absolute'}} src="https://via.placeholder.com/53x50" />
              <div style={{width: 86, height: 35, left: 992, top: 172, position: 'absolute', background: 'black', borderRadius: 30, border: '1px black solid'}} />
              <div style={{width: 52, height: 20, left: 1009, top: 182, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Roboto', fontWeight: '600', wordWrap: 'break-word'}}>구매하기</div>
              <div style={{width: 20, height: 20, left: 161, top: 133, position: 'absolute'}}>
                  <div style={{width: 4.58, height: 4.58, left: 7.71, top: 5.21, position: 'absolute', background: 'black'}}></div>
                  <div style={{width: 11.25, height: 16.59, left: 4.38, top: 1.88, position: 'absolute', background: 'black'}}></div>
              </div>
              <div style={{width: 20, height: 20, left: 434, top: 135, position: 'absolute'}}>
                  <div style={{width: 4.58, height: 4.58, left: 7.71, top: 5.21, position: 'absolute', background: 'black'}}></div>
                  <div style={{width: 11.25, height: 16.59, left: 4.38, top: 1.88, position: 'absolute', background: 'black'}}></div>
              </div>
              <div style={{width: 20, height: 20, left: 727, top: 135, position: 'absolute'}}>
                  <div style={{width: 4.58, height: 4.58, left: 7.71, top: 5.21, position: 'absolute', background: 'black'}}></div>
                  <div style={{width: 11.25, height: 16.59, left: 4.38, top: 1.88, position: 'absolute', background: 'black'}}></div>
              </div>
              <div style={{width: 20, height: 20, left: 1010, top: 135, position: 'absolute'}}>
                  <div style={{width: 4.58, height: 4.58, left: 7.71, top: 5.21, position: 'absolute', background: 'black'}}></div>
                  <div style={{width: 11.25, height: 16.59, left: 4.38, top: 1.88, position: 'absolute', background: 'black'}}></div>
              </div>
          </div>
      </div>
  </ResponsiveDiv>
  );
}


export default App;
