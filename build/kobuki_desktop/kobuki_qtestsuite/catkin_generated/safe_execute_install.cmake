execute_process(COMMAND "/home/thxssio/turtlebot2_ws/build/kobuki_desktop/kobuki_qtestsuite/catkin_generated/python_distutils_install.sh" RESULT_VARIABLE res)

if(NOT res EQUAL 0)
  message(FATAL_ERROR "execute_process(/home/thxssio/turtlebot2_ws/build/kobuki_desktop/kobuki_qtestsuite/catkin_generated/python_distutils_install.sh) returned error code ")
endif()
