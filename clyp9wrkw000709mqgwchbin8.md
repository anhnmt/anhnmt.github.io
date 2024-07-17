---
title: "8 Thuật toán cân bằng tải mà bạn cần phải biết"
datePublished: Wed Jul 17 2024 03:19:05 GMT+0000 (Coordinated Universal Time)
cuid: clyp9wrkw000709mqgwchbin8
slug: 8-thuat-toan-can-bang-tai-ma-ban-can-phai-biet
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1721186899412/c7ab1663-f7c5-4b47-8503-374db8a4f7ad.png
tags: algorithms, load-balancing, lb

---

Cân bằng tải là người hùng thầm lặng của các ứng dụng web hiệu suất cao. Để có thể tăng tối đa khả năng sử dụng, bạn cần phải biết về các thuật toán của chúng. Hãy theo dõi bài viết để xem đó là gì nhé.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1721186123277/0366cafe-ac39-424f-b674-c15141a0901c.gif align="center")

## 1\. Round Robin

Phân phối các yêu cầu một cách tuần tự trên một danh sách các máy chủ, giống như thay phiên nhau.

## 2\. Least Connections

Chuyển yêu cầu đến máy chủ có ít kết nối hoạt động nhất.

## 3\. Weighted Round Robin

Tương tự như `Round Robin` nhưng chỉ định trọng số cho các máy chủ dựa trên dung lượng của chúng, hướng nhiều lưu lượng truy cập hơn đến các máy chủ mạnh hơn.

## 4\. Weighted Least Connections

Kết hợp các lợi ích của `Least Connections` và `Weighted Round Robin`, xem xét cả tải và dung lượng của máy chủ.

## 5\. IP Hash

Sử dụng địa chỉ IP của khách hàng để chuyển các yêu cầu của họ đến cùng một máy chủ một cách nhất quán.

## 6\. Least Response Time

Chuyển yêu cầu đến máy chủ có thời gian phản hồi nhanh nhất và số lượng kết nối hoạt động thấp nhất.

## 7\. Random

Gửi yêu cầu đến máy chủ một cách ngẫu nhiên.

## 8\. Least Bandwidth

Gửi yêu cầu đến máy chủ tiêu tốn ít băng thông mạng nhất.

## Nội dung tham khảo

Nội dung bài viết này được mình tìm hiểu, dịch, tham khảo, đúc kết và tổng hợp lại từ nhiều nguồn. Mọi người có thể xem thêm các bài viết sau:

* Prof. C Murwamuila - [8 Essential Load Balancing Algorithms](https://www.linkedin.com/posts/activity-7217476622843559937-MZ3n)
    
* [Design Gurus](https://www.designgurus.io/)