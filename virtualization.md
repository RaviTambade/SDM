# Virtualization

Virtualization is a technology that allows you to create multiple simulated environments or dedicated resources from a single physical hardware system. Essentially, it enables you to run multiple operating systems or applications on a single physical machine, known as a host, and each operating system or application runs in its own virtual environment, called a virtual machine (VM) or container.

There are different types of virtualization, including:

1. **Hardware Virtualization**: This involves creating virtual machines that mimic physical computers with their own virtualized hardware, such as CPU, RAM, storage, and network interfaces. Software called a hypervisor manages these virtual machines and allocates physical resources to them.

2. **Software Virtualization**: This involves creating virtualized instances of individual applications or software components rather than entire operating systems. This is often used for isolating applications or testing software compatibility.

3. **Storage Virtualization**: This abstracts physical storage devices into logical storage units, allowing for more efficient and flexible use of storage resources.

4. **Network Virtualization**: This allows multiple virtual networks to operate on the same physical network infrastructure, enabling better network management and resource utilization.

Virtualization offers several benefits, including improved resource utilization, increased flexibility and scalability, easier management and maintenance, and cost savings through consolidation of hardware resources. It's widely used in data centers, cloud computing environments, and for software development and testing, among other applications.

## How virtualization works
Virtualization technology abstracts an application, guest operating system or data storage away from its underlying hardware or software.

Organizations that divide their hard drives into different partitions already engage in virtualization. A partition is the logical division of a hard disk drive that, in effect, creates two separate hard drives.

Server virtualization is a key use of virtualization technology. It uses a software layer called a hypervisor to emulate the underlying hardware. This includes the central processing unit's (CPU's) memory, input/output and network traffic.

Hypervisors take the physical resources and separate them for the virtual environment. They can sit on top of an OS or be directly installed onto the hardware.

Xen hypervisor is an open source software program that manages the low-level interactions that occur between virtual machines (VMs) and physical hardware. It enables the simultaneous creation, execution and management of various VMs in one physical environment. With the help of the hypervisor, the guest OS, which normally interacts with true hardware, does so with a software emulation of that hardware.

Although OSes running on true hardware often outperform those running on virtual systems, most guest OSes and applications don't fully use the underlying hardware. Virtualization removes dependency on a given hardware platform, creating greater flexibility, control and isolation for environments. Plus, virtualization has spread beyond servers to include applications, networks, data management and desktops.
