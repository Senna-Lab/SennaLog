---
sidebar_position: 1
slug: first-fanview-devlog
title: First FanView Devlog
authors: Senna
tags: [fanview, devlog]
---

# First FanView Devlog

Implemented initial project setup.

## AI와 함께합니다

- Chatgpt
- Claude
- v0
- 등등..  
  
AI들과 함께 혼자 개발할 예정.  
첫 셋팅과, 스택 선정 등을 AI와 함께 진행했다.  
나에게 있는 것은 오직.... 아이디어 뿐.ㅋㅋ  


# 기본 컨셉
### 아이돌 팬이라면 fansign에 발을 들이기 마련.
아니라면 ㅈㅅ  
아무튼 나는 그랬었다.  
fansign 이라는게 나름 재밌는 행사이다. 오빠를 실제로 보고, 대화도 하고, 사진도 찍고..  
그런데 fansign이라는 것은 이미지, 줄글, 팬 커뮤니티 게시글 등으로만 게시된다. 
일부 소속사들은 마케팅의 일종으로 100명, 200명 규모의 '아무나 오세요 fansign'을 열기도 한다. 
이런 경우는 보통 지인의 소개, RT, 입소문 등으로 알게되고 응모하게된다. 
직접 찾아보거나 간접적으로 정보를 주입받지 않는 이상, 여러 아티스트의 fansign 정보를 알아보는 것은 생각보다 어려웠다.
또, fansign은 임박해서 급하게 응모 받는 경우도 있어서
- 좋은 행사를 찾아도 이미 응모기간이 지난 경우도 있고..
- 알고있었는데 응모기간을 놓쳐버리거나 
- 1장으로 갈 수 있는 거였는데 몰랐거나

등등의 경우가 있었으므로, 이벤트 정보들을 모아보는 FanView 프로젝트를 기획하게 되었다.

## Claude, chatGPT가 점지해주는 개발 스택

### Frontend

| Stack        | Reason                                                   |
| ------------ | -------------------------------------------------------- |
| Next.js 15   | SEO, fast routing, fullstack support, optimized for SaaS |
| TypeScript   | Type safety and easier maintenance                       |
| Tailwind CSS | Fast UI development and responsive design                |
| shadcn/ui    | Clean modern components for dashboard-style UI           |


### Backend

| Stack                  | Reason                                                        |
| ---------------------- | ------------------------------------------------------------- |
| Next.js Route Handlers | Simple fullstack architecture without separate backend server |
| Zod                    | Safe API validation and schema management                     |
| Server Actions         | Cleaner mutation handling in Next.js                          |


### Database

| Stack      | Reason                                               |
| ---------- | ---------------------------------------------------- |
| PostgreSQL | Reliable relational database for schedule/event data |
| Prisma ORM | Fast development and strong TypeScript integration   |

### Infrastructure

| Stack         | Reason                                        |
| ------------- | --------------------------------------------- |
| Docker        | Consistent local development environment      |
| Vercel        | Easy deployment and excellent Next.js support |
| Upstash Redis | Simple serverless caching                     |


## 이거 될까..
Java, Spring framework 만 다뤄본 폐급 개발자인 내가 이런 세련된 셋팅을,,?  
일단 아무튼 해보기로 했다.  
DB 먼저 셋팅해보았는데, Claude와 열띈 토론...이 아니라 Claude가 차근차근 나를 설득한 끝에, **PostgreSQL** 을 사용하기로 했다.



