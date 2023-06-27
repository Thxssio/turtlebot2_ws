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
mkdir ~/catkin_ws/src -p
cd ~/catkin_ws/src
git clone https://github.com/hanruihua/Turtlebot_on_noetic.git
cd Turtlebot_on_noetic
sh turtlebot_noetic.sh
cd ~/catkin_ws
catkin_make
source devel/setup.zsh
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
