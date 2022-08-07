# JS_queue

## 구현 이유 
- JS로 이런저런 과제를 하며 큐 구조가 필요할 때에는 배열에 pop, shift를 쓰는 방식으로 구현했는데, shift의 시간 복잡도는 O(N)이기 때문에 매번 마음에 걸렸다.  
- 이에 삽입과 출력 시 동일하게 시간 복잡도 O(1)을 갖는 queue 객체를 구현해놓고 나중에 필요할 때마다 이를 써먹기로 했다.

## 구현
- class 를 이용한 queue 구현
- 함수 를 이용한 queue 구현

## 시간복잡도
### 1. enqueue
   ***
   - O(1)
   - 해당 과정에는 단순 변수 할당 4번이 이루어진다.
### 2. dequeue
   ***
   - O(1)
   - 해당 과정에는 변수 확인 및 할당이 4번 이루어진다.
### 3. getAll
   ***
   - O(N)
   - 해당 과정에서는 start부터 시작해서 end까지 총 N번의 변수 탐색이 이루어진다.

## Test (jest)
- 실행 방법
  ```
  npm i
  npm test
  ```
- 결과
  <img src=https://user-images.githubusercontent.com/89074053/183281249-b5fbe34e-1ea7-417e-a80a-40113fd86d98.png>