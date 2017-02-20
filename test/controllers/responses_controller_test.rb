require 'test_helper'

class ResponsesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get responses_index_url
    assert_response :success
  end

  test "should get new" do
    get responses_new_url
    assert_response :success
  end

  test "should get create" do
    get responses_create_url
    assert_response :success
  end

  test "should get show" do
    get responses_show_url
    assert_response :success
  end

  test "should get edit" do
    get responses_edit_url
    assert_response :success
  end

  test "should get update" do
    get responses_update_url
    assert_response :success
  end

  test "should get destroy" do
    get responses_destroy_url
    assert_response :success
  end

end
