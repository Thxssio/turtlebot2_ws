<h1 align="center">
 Workspace TurtleBot Simulation Project
</h1>


***Repository Test Turtlebot2 on ros noetic.***



- [x] Noetic
- [x] Ubuntu 20.04
- [x] Python


## Installation

Dependencies:
 
```
sudo apt-get install ros-noetic-sophus
```
```
sudo apt-get install ros-noetic-joy
```

```
sudo apt-get install libusb-dev
```

```
sudo apt-get install libftdi-dev
```

```
sudo apt install ros-noetic-base-local-planner
```
```
sudo apt install ros-noetic-move-base-msgs
```

```
mkdir ~/turtlebot2_ws/src -p
cd ~/turtlebot2_ws/src
git clone https://github.com/thxssio/turtlebot2_ws.git
cd turtlebot2_ws
sh turtlebot_noetic.sh
cd ~/catkin_ws
catkin_make
source devel/setup.bash
```

## Test

Simulation

```
roslaunch turtlebot_gazebo turtlebot_world.launch
```

Teleop control

```
roslaunch turtlebot_teleop keyboard_teleop.launch
```

## Map

Create map
```
roslaunch turtlebot_gazebo turtlebot_world.launch
```
```
roslaunch turtlebot_gazebo gmapping_demo.launch
```

```
roslaunch turtlebot_rviz_launchers view_navigation.launch
```

```
rosrun map_server map_saver -f /tmp/my_map
```

Autonomous with map 
```
roslaunch turtlebot_gazebo amcl_demo.launch map_file:=/tmp/my_map.yaml
```

```
roslaunch turtlebot_rviz_launchers view_navigation.launch --screen
```

## RtabMap

```
roslaunch turtlebot_gazebo turtlebot_world.launch 
```
```
roslaunch rtabmap_demos demo_turtlebot_mapping.launch simulation:=true
```

```
roslaunch rtabmap_demos demo_turtlebot_rviz.launch 
```

