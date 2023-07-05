Feature: Login

#  Rule: Happy paths
    Background:
      Given User go to login page

    Scenario: SI-01 Verify that login successfully with valid Email and Password
      When Enter "text" in "Email" with "admin@gmail.com"
      When Enter "text" in "Mật khẩu" with "123123"
      When Click "Đăng nhập" button
      Then User look message "Success" popup

    Scenario: SI-02 Verify that Login unsuccessfully with invalid Email
      When Enter "text" in "Email" with "_RANDOM_"
      When Enter "text" in "Mật khẩu" with "123123"
      When Click "Đăng nhập" button
      Then User look message "Tài khoản _@Email@_ không tồn tại trong hệ thống. Vui lòng đăng ký mới." popup

    Scenario: SI-03 Verify that Login unsuccessfully with invalid Password
      When Enter "text" in "Email" with "admin@gmail.com"
      When Enter "text" in "Mật khẩu" with "_RANDOM_"
      When Click "Đăng nhập" button
      Then User look message "Sai mật khẩu cho tài khoản _@Email@_" popup

    Scenario: SI-04 Verify that Login unsuccessfully because no enter Email and Password
      When Click "Đăng nhập" button
      Then Required message "Email" displayed under "Xin vui lòng nhập email" field
      Then Required message "Mật khẩu" displayed under "Xin vui lòng nhập mật khẩu" field

    Scenario: SI-05 Verify that Login unsuccessfully because no enter Email
      When Enter "text" in "Mật khẩu" with "123123"
      When Click "Đăng nhập" button
      Then Required message "Email" displayed under "Xin vui lòng nhập email" field

    Scenario: SI-06 Verify that Login unsuccessfully because no enter Password
      When Enter "text" in "Email" with "admin@gmail.com"
      When Click "Đăng nhập" button
      Then Required message "Mật khẩu" displayed under "Xin vui lòng nhập mật khẩu" field

